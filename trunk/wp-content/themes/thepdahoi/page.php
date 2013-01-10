<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
get_header(); ?>
<div id="main" class="sizePage">
    <div class="content">
        <div class="fl content_box">
            <?php while ( have_posts() ) : the_post(); ?>
            <span class="post_title">
                <img class="dot" src="<?php bloginfo( 'template_url' ); ?>/images/dot.png" /><?php the_title(); ?>
                <fb:like href="http://<?php echo get_permalink($post->ID); ?>" send="true" width="728" show_faces="false"></fb:like>
            </span>
                <div class="post">
                    <?php the_content(); ?>
                </div>
            <?php endwhile; // end of the loop. ?>
        </div>
    <?php get_sidebar(); ?>
    </div>
</div>
<?php get_footer(); ?>