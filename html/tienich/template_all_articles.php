<?php
/**
 * Template Name: All Articles
 */
?>
<?php get_header() ?>

<?php 
    $args = array(
        'paged' => $paged,
        'cat' => 11
    );

    query_posts($args);
?>
<div id="content">
    <div class="main_content">
        <div class="div_content_left">
            <div class="patrons_title"><?php echo get_the_title($post->ID)?></div>
<?php if (have_posts()) :?>
<?php while (have_posts()) : the_post(); ?>
            <div class="patrons_post postID_<?php the_ID(); ?>">
                <div class="travel_sub_box_img" style="text-align: center; width: 50px;">
                    <a href="<?php the_permalink() ?>" title="<?php the_title(); ?>">
                            <img src="<?php bloginfo( 'template_url' ); ?>/images/img/articles.png" width="45" height="55" border="0" alt="<?php the_title() ?>" />
                    </a>
                </div>
               <div class="patrons_box_content" style="width: 530px;">
                   <span class="patrons_box_title"><a href="<?php the_permalink() ?>"><?php the_title() ?></a></span>
                    <span class="patrons_box_summary"><?php the_excerpt_max_charlength(260) ?></span>
                    <span class="patrons_more"><a href="<?php the_permalink() ?>">Continue Reading &rarr;</a></span>
                </div>
            </div>
<?php endwhile; endif;?>
            <div class="navigation" style="width: 500px;">
                    <?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); } else { ?>
                    <div class="alignleft"><?php next_posts_link('&laquo; Prev') ?></div>
                    <div class="alignright"><?php previous_posts_link('Last &raquo;') ?></div>
                    <?php } ?>
            </div>
        </div>
        <div class="div_content_right">
             <?php include(TEMPLATEPATH .'/includes/page_right.php'); ?>
        </div>
    </div>
    <div class="clearfix"></div>
</div>
<?php get_footer()?>