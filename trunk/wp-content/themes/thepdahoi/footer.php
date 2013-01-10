<?php
/**
 * The template for displaying the footer.
 *
 * Contains footer content and the closing of the
 * #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
            <div id="w_footer">
                <div id="footer" class="sizePage">
                    FOOTER
                </div>                
            </div>
            <div id="w_copy_right">
                <div id="copy_right">
                    Copyright © 2013 CÔNG TY TNHH SẮT THÉP HIỀN ĐƯỜNG . All Right Reserved.
                </div>                
            </div>
        </div>
        <?php wp_footer(); ?>
    </body>
</html>
<script>
    jQuery(document).ready(function(){
        var c_height = jQuery('.content').outerHeight(true);
        var w_height = jQuery('.widget_box').outerHeight(true);
        if(c_height > w_height)
        jQuery('#main .widget_box').css('min-height',c_height);
    });
</script>