<?php
/**
 * The Template for displaying all single posts.
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
                <!--<fb:like href="<?php echo get_permalink($post->ID); ?>" send="true" width="728" show_faces="false"></fb:like>-->
            </span>
                <div class="post">
                    <?php the_content(); ?>
                </div>
            <?php endwhile; // end of the loop. ?>
            <div class="fb-comments">
                    <fb:comments href="<?php echo get_permalink($post->ID); ?>" colorscheme="dark" width=720" num_posts="20"></fb:comments>
            </div>
        </div>
    <?php get_sidebar(); ?>
    </div>
</div>
<?php get_footer(); ?>