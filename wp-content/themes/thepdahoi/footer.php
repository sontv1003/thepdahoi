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
                    <div id="btnUp" class="up"></div>
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
    $('#btnUp').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
</script>