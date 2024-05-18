<?php

namespace Nelio_AB_Testing\Experiment_Library\Template_Experiment;

defined( 'ABSPATH' ) || exit;

use WP_Query;

use function add_filter;

function add_preview_link_hooks() {

	$links = array();
	add_filter(
		'nab_nab/template_preview_link_alternative',
		function( $preview_link, $alternative, $control ) use ( &$links ) {

			$key = $control['postType'] . '-' . $control['templateId'];
			if ( isset( $links[ $key ] ) ) {
				return $links[ $key ];
			}//end if
			$links[ $key ] = $preview_link;

			if ( '_nab_default_template' === $control['templateId'] ) {
				$meta_query = array(
					array(
						'key'     => '_wp_page_template',
						'compare' => 'NOT EXISTS',
					),
				);
			} else {
				$meta_query = array(
					array(
						'key'     => '_wp_page_template',
						'compare' => '=',
						'value'   => $control['templateId'],
					),
				);
			}//end if

			$args = array(
				'post_type'      => $control['postType'],
				'post_status'    => 'publish',
				'posts_per_page' => 1,
				'meta_query'     => $meta_query, // phpcs:ignore
				'no_found_rows'  => true,
			);

			$query = new WP_Query( $args );
			if ( $query->have_posts() ) {
				$query->the_post();
				$links[ $key ] = get_permalink();
				wp_reset_postdata();
			}//end if

			return $links[ $key ];

		},
		10,
		3
	);

}//end add_preview_link_hooks()
add_preview_link_hooks();

add_action( 'nab_nab/template_preview_alternative', __NAMESPACE__ . '\load_alternative', 10, 2 );
