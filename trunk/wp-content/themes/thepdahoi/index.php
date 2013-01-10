<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>
<div id="main" class="sizePage">
    <div class="product_home">
        <h2>Sản phẩm</h2>
<?php
    global $p;
    $args = array( 'numberposts' => 100,'orderby' => 'ID', 'order'=> 'DESC','category' => 3);
    $myposts = get_posts( $args );
    if($myposts):
    $i = 1;
    foreach( $myposts as $p ) : setup_postdata($p); ?>
        <div class="fl item postID_<?php echo $p->ID; ?>">
            <h3><a href="<?php echo get_permalink($p->ID); ?>" title="<?php echo $p->post_title; ?>"><?php echo $p->post_title; ?></a></h3>
            <a href="<?php echo get_permalink($p->ID); ?>" title="<?php echo $p->post_title; ?>">
               <?php if(!has_post_thumbnail($p->ID)) {?>
                    <img src="<?php bloginfo( 'template_url' ); ?>/images/no_images.jpg" width="200" height="150" border="0"/>
               <?php } else {
                    echo get_the_post_thumbnail($p->ID, 'home-product');
               } ?>
            </a>
            <span><?php the_excerpt_max_charlength(50) ?></span>
            <label>Giá: Liên hệ</label>
        </div> 
<?php if($i%4==0) {
        echo '<div class="clear"></div>';
    }
?>
<?php $i++; endforeach; endif; ?>
    <div class="clear"></div>
    </div>
    <!--<div class="line"></div>-->
    <div class="content">
        <div class="news_list fl">
            <h2>Tin tức mới nhất</h2>
            <div class="box home_news">
<?php
    $args = array(
        'cat' => 4,
        'orderby' => 'ID',
        'order'=> 'DESC'
    );
    query_posts($args);
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
                        <span class="des"><?php the_excerpt_max_charlength(300) ?></span>
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