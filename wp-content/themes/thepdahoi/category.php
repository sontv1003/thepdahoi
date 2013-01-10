<?php
/**
 * The template for displaying Category pages.
 *
 * Used to display archive-type pages for posts in a category.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>
<div id="main" class="sizePage">
    <div class="content">
        <div class="news_list fl">
        <?php 
            $cat = get_the_category(); 
            $cat = $cat[0];
        ?>
            <h2><img class="dot" src="<?php bloginfo( 'template_url' ); ?>/images/dot.png" /><?php echo $cat->cat_name; ?></h2>
            <div class="box home_news">
<?php
    if (have_posts()) : while (have_posts()) : the_post(); ?>
                <div class="row postID_<?php echo the_ID(); ?>">
                    <div class="fl news_img">
                    <a href="<?php the_permalink() ?>" title="<?php echo $p_news->post_title; ?>">
                         <?php if(!has_post_thumbnail($post->ID)) {?>
                            <img src="<?php bloginfo( 'template_url' ); ?>/images/no_images.jpg" width="210" height="130" alt="<?php the_title() ?>" />
                       <?php } else {
                            echo get_the_post_thumbnail($post->ID, 'home-news');
                       } ?>
                     </a>
                    </div>
                    <div class="fr description">
                        <div class="title"><a href="<?php the_permalink() ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></div>
                        <span class="des"><?php the_excerpt_max_charlength(270) ?></span>
                        <a href="<?php the_permalink() ?>" class="button">Xem chi tiết</a>
                    </div>
                </div>
<?php endwhile; endif; ?>
            </div>
        </div>
<?php get_sidebar(); ?>
    </div>
</div>
<?php get_footer(); ?>