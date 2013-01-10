<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?> xmlns:fb="http://ogp.me/ns/fb#">
<!--<![endif]-->
    <head>
        <title><?php wp_title( '|', true, 'right' ); ?></title>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />  
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="shortcut icon" href="<?php bloginfo( 'template_url' ); ?>/images/favicon.ico" />
        <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.js"></script>
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
        <div id="container">
            <div id="w_top">
                <div class="search sizePage">
                    <div class="fl" style="margin-top: 10px;">Hotline:098.275.6694 - Fax: 02413.758.189</div>
                    <a title="Fanpage Thép Hiền Đường"  href="#"><img class="fr" src="<?php bloginfo( 'template_url' ); ?>/images/facebook.png" /></a>
                    <a title="Twitter Thép Hiền Đường" href="#"><img class="fr" src="<?php bloginfo( 'template_url' ); ?>/images/twitter.png" /></a>
                    <form method="get" id="search_form" action="<?php bloginfo('home'); ?>">
                        <input class="fr btnSearch" type="submit" value="Tìm kiếm"/>
                        <input name="s" type="text" class="txt_search" id="s" value="Nhập nội dung" onfocus="if (this.value == 'Nhập nội dung') {this.value = '';}" onblur="if (this.value == '') {this.value = 'Nhập nội dung';}" />
                        <input type="hidden" id="searchsubmit" value="Search..." />
                    </form>
                    <div class="clear"></div>
                </div>
                <div id="w_header">                    
                    <div id="header" class="sizePage">
                        <div class="logo fl">
                            <a href="<?php echo site_url(); ?>"><img src="<?php bloginfo( 'template_url' ); ?>/images/logo.png" /></a>
                        </div>
                        <div id="menu" class="fr">
                            <?php wp_nav_menu( array( 'theme_location' => 'primary','container_id' => 'menu','menu_class'=>'fr') ); ?>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div id="w_slideshow">
                    <!--
                    <?php if ( function_exists('show_skitter') ) { show_skitter(); } ?>
                    <?php if ( function_exists('show_nivo_slider') ) { show_nivo_slider(); } ?>
                    -->
                    <?php if (function_exists('nivoslider4wp_show')) { nivoslider4wp_show(); } ?>
                    <div id="slideshow" class="sizePage">
                        <!--
                        <?php $header_image = get_header_image();
                        if ( ! empty( $header_image ) ) : ?>
                                <a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo esc_url( $header_image ); ?>" class="header-image" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>" alt="" /></a>
                        <?php endif; ?>
                        -->
                        
                    </div>
                </div>
                <div id="w_bar">
                </div>
            </div>