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
                    <div class="fl footer_info">
                        <h4>Cty TNHH SX & TM Thép Hiền Đường</h4>
                        <ul>
                            <li><strong>Di động:</strong> 098.275.6694 & 0168.657.8998</li>
                            <li><strong>Cố định:</strong> (0241) 629.3694</li>
                            <li><strong>Fax:</strong> (0241) 375.8189</li>
                            <li><strong>Email:</strong> <a href="mailto:thepdahoivn@gmail.com">thepdahoivn@gmail.com</a></li>
                            <li><strong>Địa chỉ:</strong> Cụm KCN Châu Khê - TX.Từ Sơn - Bắc Ninh</li>
                        </ul>
                    </div>
                    <div class="fr footer_widget">
                        <?php dynamic_sidebar('sidebar_footer'); ?>
                        <div class="clear"></div>                        
                    </div>
                    <div class="clear"></div>
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

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-37593124-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>