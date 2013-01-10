<?php
/**
 * The sidebar containing the main widget area.
 *
 * If no active widgets in sidebar, let's hide it completely.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
<div id="secondary" class="fr widget_box box widget-area" role="complementary" >
    <h2><img class="dot" src="images/dot.png" />MENU PHẢI</h2>
    <h2><img class="dot" src="images/dot.png" />Hỗ trợ trực tuyến</h2>
    <div class="box">
        <ul class="livechat">
            <li>
                <label>Mr. Hoàng</label>
                <span><a href="ymsgr:sendim?minhhoanghi" mce_href="ymsgr:sendim?minhhoanghi" border="0"><img src="http://opi.yahoo.com/online?u=minhhoanghi&t=2" mce_src="http://opi.yahoo.com/online?u=minhhoanghi&t=2"></a></span>             
                <div class="clear"></div>
            </li>
        </ul>
    </div>

    <h2>Facebook</h2>
    <iframe src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2FIshop227TranPhuTuSon&amp;width=255&amp;height=440&amp;show_faces=true&amp;colorscheme=dark&amp;stream=false&amp;border_color&amp;header=true" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:255px; height:440px;" allowTransparency="true"></iframe>
    <?php dynamic_sidebar( 'sidebar-1' ); ?>
</div>
<?php endif; ?>
<div class="clear"></div>