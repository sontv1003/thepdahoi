<?php
/**
 * Template Name: Sub Page
 */
?>

<?php get_header() ?>
<?php
   if ($post->post_parent)	{
        $ancestors = get_post_ancestors($post->ID);
        $root = count($ancestors)-1;
        $parent = $ancestors[$root];
    } else {
        $parent = $post->ID;
    }
?>
</div>
<div class="div_header_banner">
<!--    <div class="header_logo"><a href="<?php echo site_url()?>"><img src="<?php bloginfo( 'template_url' ); ?>/images/img/logo.gif" /></a></div>    -->
	<?php
         add_image_size('head-slide',970,250);
         $images = get_menu_images('primary','head-slide');
    if(count($images) == 1 && $images != ''){ ?>
        <img style="margin-bottom: 5px;" src="<?php echo $images[0];?>" width="970" border="0" alt="" />
    <?php } elseif(count($images)>1) { ?>
        <ul id="slideshow">
        <?php foreach ($images as $item):
        ?>
            <li><img src="<?php echo $item;?>" width="970" height="250px" border="0" alt="" /></li>
        <?php endforeach; ?>
        </ul><br clear="all" />
    <?php } else {?>
        <div style="height: 10px;"/>
    <?php }?>
</div>
<div id="main">
    <div class="div_main_content">
        <div class="div_subpage_left">
            <div class="div_subpage_menu">
                <?php
                    $arguments = array('child_of' => $parent, 'title_li' => '','echo' => 0,'exclude' => '263', 'link_before' => '- ','sort_column' => 'menu_order');
                    $children = wp_list_pages($arguments);
                    if ($children) { ?>
                        <ul>
                            <?php echo $children; ?>
                        </ul>
                <?php } ?>
            </div>
        </div>
        <div class="div_subpage_right">
            <?php while (have_posts()) : the_post();?>
            <div class="div_subpage_content_title"><?php the_title() ?></div>
            <div class="div_subpage_content">
                <?php the_content() ?>
            </div>
            <?php endwhile; ?>
        </div>
        <div class="cl"></div>
    </div>
</div>

<?php get_footer()?>
