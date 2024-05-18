<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'o?euz=d(@wA+0yc`]EHY{7f[AqB.sVWwy`O}p,iCTtC WL{L%,Lo]bh! }w09sZJ' );
define( 'SECURE_AUTH_KEY',  '1^Ck:bX<yD@x`s1i;uZEU,MY2%NJsNaIGGt^;0#zvS7[cpy!&4=ZrOl%x3zRV+-K' );
define( 'LOGGED_IN_KEY',    'P)7|05iKbw8lDoeDLs&WQ.hM?B)5~;&cg!ljPCM4p(%4L=LNE7Srl.y8QE1t}<R~' );
define( 'NONCE_KEY',        'eg=VRy/RZHsW8dynLjohL+OnRT6a)VkEII~>utP!wptQ%MND0A]T~{#OOryO(^F6' );
define( 'AUTH_SALT',        ')P ltB 82*{aLc F%9EyC;u1%~k;2+#4,$t|b)<Beo^?,YfEEIp]4o?za69=k2qY' );
define( 'SECURE_AUTH_SALT', 'kMU,xq>K_ToYcCE+*>t/}_pbVc,%@$;6@ei9*l]#a^N;h(v21]b4e/K[;*v@|)-w' );
define( 'LOGGED_IN_SALT',   '&M{BRa$`?dW#g[Dw:}X/29W?|{yZI-^&qDg%tkFzg d>h,GaX8cX{TGGR5`?,%b6' );
define( 'NONCE_SALT',       'AQdD>:2:*E-}B[i%{^p12E sZ#.saJh.]+ZK-Brw0>M=u58U+KH0|h3uJc_{&|A6' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
