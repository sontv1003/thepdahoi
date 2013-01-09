<?php
/**
 * Template Name___: XML
 */
?>
<?php get_header() ?>
</div>
<div class="div_header_banner">
<!--    <div class="header_logo"><a href="<?php echo site_url()?>"><img src="<?php bloginfo( 'template_url' ); ?>/images/img/logo.gif" /></a></div>-->
    <ul id="slideshow">
        <li><img src="<?php bloginfo( 'template_url' ); ?>/images/banners/getting_banner.jpg" width="970" height="250" border="0" alt="" /></li>
        <li><img src="<?php bloginfo( 'template_url' ); ?>/images/banners/leaving_banner.jpg" width="970" height="250" border="0" alt="" /></li>
        <li><img src="<?php bloginfo( 'template_url' ); ?>/images/banners/terminals_banner.jpg" width="970" height="250" border="0" alt="" /></li>
    </ul>
</div>
<div id="main">
    <div class="div_main_content">
        <?php $cat = get_the_category();
            $args = array( 'numberposts' => 10,'post__not_in' => array($post->ID),'order'=> 'DESC', 'orderby' => 'ID', 'category' => $cat[0]->cat_ID);
            $postslist = get_posts( $args );

            $xml_id = $_GET['xml_id'];
            get_deal($deal->ID);
        ?>
        <div class="div_main_update_lastest">
            <div class="div_subpage_content_title">UPDATE OF <?php echo $cat[0]->name; ?></div>
            <?php while (have_posts()) : the_post();?>
            <div class="div_update_lastest_title"><?php the_title() ?></div>
            <div class="div_update_lastest_date">Posted: <?php the_date() ?></div>

            <div class="div_subpage_content">
                <?php the_content() ?>
            </div>
            <?php endwhile; ?>
            <div class="div_post_others">
            <?php $args = array(
                    'numberposts'     => 10,
                    'offset'          => 0,
                    'orderby'         => 'post_date',
                    'order'           => 'DESC',
                );
                $deals_array = get_deals( $args );
            
            if($deals_array): ?>
                <div class="post_other_title">Other Hot Deal Cruise:</div>
            <?php  foreach($deals_array as $deal):
                    fill_deal($deal);
            ?>
                <div class="other_item">  - <a href="<?php echo $p->guid; ?>"><?php echo $deal->post_title; ?></a> <span style="color:#ccc; font-size: 12px;"><?php echo $p->post_date; ?></span> </div>
            <?php  endforeach; endif;?>
            </div>
        </div>
</div>
<?php get_footer()?>