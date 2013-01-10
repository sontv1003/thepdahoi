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

    <?php dynamic_sidebar( 'sidebar-1' ); ?>
</div>
<?php endif; ?>
<div class="clear"></div>