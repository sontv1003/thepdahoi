<?php
/**
 * Template Name: Mentor Speak
 */
?>
<?php get_header() ?>

<?php
    $post_of_page = 10;
    $args = array(
        'posts_per_page' => $post_of_page,
        'paged' => $paged,
        'cat' => 6
    );

    query_posts($args);
?>
<div id="content">
    <div class="main_content">
        <div class="div_content_left">
<?php if (have_posts()) :?>
<?php while (have_posts()) : the_post(); ?>
            <div class="patrons_post postID_<?php the_ID(); ?>">
                <div class="patrons_box_img">
                    <a href="<?php the_permalink() ?>" title="<?php the_title(); ?>">
                       <?php if(!has_post_thumbnail($post->ID)) {?>
                            <img src="<?php bloginfo( 'template_url' ); ?>/images/no_images.jpg" width="127" height="102" border="0"/>
                       <?php } else {
                            echo get_the_post_thumbnail($post->ID, 'patrons-small-thumb');
                       } ?>
                    </a>
                </div>
               <div class="patrons_box_content">
                   <span class="patrons_box_title"><a href="<?php the_permalink() ?>"><?php the_title() ?></a></span>
                   <span class="patrons_box_summary"><?php echo content_max_charlength(get_the_excerpt(),210); ?></span>
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