<?php
/**
 * Template Name: Home
 */
?>
<?php get_header() ?>
<?php if(isset($_GET['paged'])) {
        $page = $_GET['paged'];
    }
?>


<div id="content">
    <div class="div_homepage_sildeshow">
        <div class="homepage_slideshow_img">
            <?php //include (ABSPATH . '/wp-content/plugins/wp-glideshow/glideshow.php'); ?>
            <?php if(function_exists('wp_content_slider')) { wp_content_slider(); } ?>
        </div>
        <div class="homepage_top_post">
            <div class="top_post_tite">Top Posts</div>
            <div class="top_post">
                <?php include(TEMPLATEPATH .'/includes/top_posts.php'); ?>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class="main_content">
        <div class="div_content_left">
            <?php
                //Get Page Patrons
                $page_id = 2;
                $p = get_page($page_id);                    
            ?>
            <div class="home_description">
                <?php echo $p->post_content; ?>
            </div>
<!--           HOME FEATURE                     -->
<?php
    global $p;
    $args = array( 'numberposts' => 2,'orderby' => 'ID', 'order'=> 'DESC','category' => 141);
    $myposts = get_posts( $args );
    if($myposts):
?>
<div class="home_feature_title">Featured</div>
<?php foreach( $myposts as $p ) : setup_postdata($p); ?>
            <div class="div_post postID_<?php echo $p->ID; ?>">
                <div class="div_box_img">
                    <a href="<?php the_permalink() ?>" title="<?php echo $p->post_title; ?>">
                       <?php if(!has_post_thumbnail($p->ID)) {?>
                            <img src="<?php bloginfo( 'template_url' ); ?>/images/no_images.jpg" width="150" height="150" border="0"/>
                       <?php } else {
                            echo get_the_post_thumbnail($p->ID, 'thumbnail');
                       } ?>
                    </a>
                </div>
               <div class="div_box_content">
                   <span class="sp_box_title"><a href="<?php echo get_permalink($p->ID) ?>"><?php echo $p->post_title; ?></a></span>
                   <span class="sp_box_date">Posted on <?php echo date(get_option('date_format'),strtotime($p->post_date));?> at <?php echo date(get_option('time_format'),strtotime($p->post_date));?><!-- by <?php echo get_the_author_meta('display_name', $p->post_author);?>--></span>
                   <span class="sp_box_content"><?php content_max_charlength($p->post_excerpt,200) ?></span>
                   <span class="sp_more"><a href="<?php echo get_permalink($p->ID); ?>">Continue Reading &rarr;</a></span>
               </div>
            </div>
<?php endforeach; endif; ?>
<!--           END HOME FEATURE                     -->
<?php
    $args = array(
        'paged' => $page,
        'cat' => 5
    );
    query_posts($args);
    $i = 0;
?>
            <div class="post_two_column">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <div class="post_home_item postID_<?php the_ID(); ?>" style="float:<?php if($i%2 == 0){ echo 'left; margin-right:20px;';} else {echo 'right;'; }?>">
                    <div class="post_home_item_left">
                        <a href="<?php the_permalink() ?>" title="<?php the_title(); ?>">
                       <?php if(!has_post_thumbnail($post->ID)) {?>
                            <img src="<?php bloginfo( 'template_url' ); ?>/images/no_images.jpg" width="42" height="42" border="0" alt="<?php the_title() ?>" />
                       <?php } else {
                            echo get_the_post_thumbnail($post->ID, 'home-small-thumb');
                       } ?>
                        </a>
                    </div>
                    <div class="post_home_item_right">
                        <span class="sp_home_item_title"><a href="<?php the_permalink() ?>"><?php the_title() ?></a></span>
                        <span class="sp_box_date">Posted on <?php the_time(get_option('date_format'));?> at <?php the_time(get_option('time_format'))?><!-- by <?php the_author()?> --></span>
                        <span class="sp_box_content"><?php the_excerpt_max_charlength(150) ?></span>
                        <span class="sp_more"><a href="<?php the_permalink() ?>">Continue Reading &rarr;</a></span>
                    </div>
                    <div class="clearfix"></div>
                </div>
<?php $i++; endwhile; endif; ?>
            </div>
<!--            <img src="<?php bloginfo( 'template_url' ); ?>/images/img/banner_footer.jpg" width="640px" />-->
            <div class="navigation">
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