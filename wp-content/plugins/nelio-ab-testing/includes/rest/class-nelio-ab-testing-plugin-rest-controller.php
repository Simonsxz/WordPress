<?php
/**
 * This file contains the class that defines REST API endpoints for
 * installing plugins in the background.
 *
 * @package    Nelio_AB_Testing
 * @subpackage Nelio_AB_Testing/includes/rest
 * @since      6.4.0
 */

defined( 'ABSPATH' ) || exit;

class Nelio_AB_Testing_Plugin_REST_Controller extends WP_REST_Controller {

	/**
	 * The single instance of this class.
	 *
	 * @since  6.4.0
	 * @var    Nelio_AB_Testing_Plugin_REST_Controller
	 */
	protected static $instance;

	/**
	 * Returns the single instance of this class.
	 *
	 * @return Nelio_AB_Testing_Plugin_REST_Controller the single instance of this class.
	 *
	 * @since 6.4.0
	 */
	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}//end if

		return self::$instance;

	}//end instance()

	/**
	 * Hooks into WordPress.
	 *
	 * @since 6.4.0
	 */
	public function init() {

		add_action( 'rest_api_init', array( $this, 'register_routes' ) );

	}//end init()

	/**
	 * Register the routes for the objects of the controller.
	 */
	public function register_routes() {

		register_rest_route(
			nelioab()->rest_namespace,
			'/activate/recordings',
			array(
				array(
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'activate_recordings' ),
					'permission_callback' => nab_capability_checker( 'manage_nab_account' ),
					'args'                => array(),
				),
			)
		);

	}//end register_routes()

	/**
	 * Installs and activates Nelio Session Recordings.
	 *
	 * @return WP_REST_Response The response
	 */
	public function activate_recordings() {

		if ( ! nab_is_subscribed_to_addon( 'nsr-addon' ) ) {
			$response = $this->subscribe_to_addon( 'nsr-addon' );
			if ( is_wp_error( $response ) ) {
				return $response;
			}//end if
			delete_option( 'neliosr_standalone' );
		}//end if

		ob_start();
		$error = $this->nelio_activate_plugin( 'nelio-session-recordings/nelio-session-recordings.php' ); //phpcs:ignore
		ob_end_clean();
		if ( ! empty( $error ) ) {
			return is_wp_error( $error ) ? $error : new WP_Error( 'server-error', $error );
		}//end if

		return new WP_REST_Response( true, 200 );

	}//end activate_recordings()

	private function subscribe_to_addon( $addon_name ) {
		$data = array(
			'method'    => 'POST',
			'timeout'   => apply_filters( 'nab_request_timeout', 30 ),
			'sslverify' => ! nab_does_api_use_proxy(),
			'headers'   => array(
				'Authorization' => 'Bearer ' . nab_generate_api_auth_token(),
				'accept'        => 'application/json',
				'content-type'  => 'application/json',
			),
			'body'      => wp_json_encode(
				array(
					'siteId' => nab_get_site_id(),
					'addon'  => $addon_name,
				)
			),
		);

		$url      = nab_get_api_url( '/fastspring/addon', 'wp' );
		$response = wp_remote_request( $url, $data );

		// If the response is an error, leave.
		$error = nab_maybe_return_error_json( $response );
		if ( $error ) {
			return $error;
		}//end if

		$addons = nab_get_subscription_addons();
		nab_update_subscription_addons( array_merge( $addons, array( $addon_name ) ) );
	}//end subscribe_to_addon()

	private function nelio_activate_plugin( $plugin ) {
		$plugin_mainfile = trailingslashit( WP_PLUGIN_DIR ) . $plugin;

		if ( $this->is_plugin_active( $plugin ) ) {
			// Make sure the plugin is still there (files could be removed without WordPress noticing).
			$error = $this->is_plugin_valid( $plugin );
			if ( ! is_wp_error( $error ) ) {
				return;
			}//end if
		}//end if

		// Install if neccessary.
		if ( ! $this->is_plugin_installed( $plugin ) ) {
			$error = $this->install_plugin( $plugin );
			if ( is_wp_error( $error ) ) {
				return $error;
			}//end if
		}//end if

		// Now we activate, when install has been successfull.
		if ( ! $this->is_plugin_installed( $plugin ) ) {
			return new WP_Error(
				'plugin-not-installed',
				'Plugin could not be installed (' . $plugin . '). '
					. 'This probably means there is an error in the plugin basename, '
					. 'or the plugin isn’t in the WordPress repository on wordpress.org. '
					. 'Please correct the problem, and/or install and activate the plugin manually.'
					. "\n"
			);
		}//end if

		$error = $this->is_plugin_valid( $plugin );
		if ( is_wp_error( $error ) ) {
			return new WP_Error(
				'plugin-not-found',
				'Plugin main file has not been found (' . $plugin . ').'
					. 'This probably means the main file’s name does not match the slug.'
					. 'Please check the plugins listing in wp-admin.'
					. "\n"
					. var_export( $error->get_error_code(), true ) . ': ' //phpcs:ignore
					. var_export( $error->get_error_message(), true ) //phpcs:ignore
					. "\n"
			);
		}//end if

		$error = activate_plugin( $plugin_mainfile );
		if ( is_wp_error( $error ) ) {
			return new WP_Error(
				'plugin-not-activated',
				'Plugin has not been activated (' . $plugin . ').'
					. 'This probably means the main file’s name does not match the slug.'
					. 'Check the plugins listing in wp-admin.'
					. "\n"
					. var_export( $error->get_error_code(), true ) . ': ' //phpcs:ignore
					. var_export( $error->get_error_message(), true ) //phpcs:ignore
					. "\n"
			);
		}//end if
	}//end nelio_activate_plugin()

	private function install_plugin( $plugin ) {
		require_once nelioab()->plugin_path . '/includes/utils/plugin-installer.php';

		$api = plugins_api(
			'plugin_information',
			array(
				'slug'   => $this->get_plugin_dir( $plugin ),
				'fields' => array(
					'short_description' => false,
					'requires'          => false,
					'sections'          => false,
					'rating'            => false,
					'ratings'           => false,
					'downloaded'        => false,
					'last_updated'      => false,
					'added'             => false,
					'tags'              => false,
					'compatibility'     => false,
					'homepage'          => false,
					'donate_link'       => false,
				),
			)
		);

		$skin     = new Nelio_AB_Testing_Quiet_Upgrader_Skin( array( 'api' => $api ) );
		$upgrader = new Plugin_Upgrader( $skin );
		$error    = $upgrader->install( $api->download_link );

		/*
		 * Check for errors...
		 * $upgrader->install() returns NULL on success,
		 * otherwise a WP_Error object.
		 */
		if ( is_wp_error( $error ) ) {
			return new WP_Error(
				'install-error',
				'Error: Install process failed (' . $plugin . ').'
					. "\n"
					. var_export( $error->get_error_code(), true ) . ': ' //phpcs:ignore
					. var_export( $error->get_error_message(), true ) //phpcs:ignore
					. "\n"
			);
		}//end if
	}//end install_plugin()

	private function is_plugin_installed( $plugin ) {
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}//end if
		$plugins = get_plugins( '/' . $this->get_plugin_dir( $plugin ) );
		if ( ! empty( $plugins ) ) {
			return true;
		}//end if
		return false;
	}//end is_plugin_installed()

	private function is_plugin_active( $plugin ) {
		if ( ! function_exists( 'is_plugin_active' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}//end if
		return is_plugin_active( $plugin );
	}//end is_plugin_active()

	private function is_plugin_valid( $plugin ) {
		if ( ! function_exists( 'validate_plugin' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}//end if
		return validate_plugin( $plugin );
	}//end is_plugin_valid()

	private function get_plugin_dir( $plugin ) {
		$chunks = explode( '/', $plugin );
		if ( ! is_array( $chunks ) ) {
			$plugin_dir = $chunks;
		} else {
			$plugin_dir = $chunks[0];
		}//end if
		return $plugin_dir;
	}//end get_plugin_dir()

}//end class
