<?php
/**
 * Template Name: Lien He
 */
?>
<?php get_header(); ?>
<div id="main" class="sizePage">
    <div class="fr contact_map">
        <h2>Bản đồ dẫn đường</h2>
        <!DOCTYPE html>
        <html>
        <head>
        <script type="text/javascript"
            src="http://maps.google.com/maps/api/js?sensor=false">
        </script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript">
          function initialize() {
            var position = new google.maps.LatLng(21.113728,105.92733);
            var myOptions = {
              zoom: 14,
              center: position,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(
                document.getElementById("map_canvas"),
                myOptions);

            var marker = new google.maps.Marker({
                position: position,
                map: map,
                title:"Cty TNHH Sắt thép Hiền Đường"
            });  

            var contentString = '<span style="color:#0760AD;font-size:18px;"><strong>Cty TNHH Sắt thép Hiền Đường</strong></span><br/>Địa chỉ: Cụm khu công nghiệp <br/>Điện thoại: <strong>44444</strong><br />Email: thepdahoivn@gmail.com';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map,marker);
            });

          }

        </script>
        </head>
        <body onload="initialize()">
          <div id="map_canvas"></div>
        </body>
        </html>
        <div>
            Nội dung chi tiết
        </div>
    </div>
    <div class="fl contact_form">
        <h2>Gửi thông tin</h2>
        <span class="note">Mọi thắc mắc, hỏi đáp xin vui lòng gửi yêu cầu tới chúng tôi. Xin chân thành cảm ơn!</span>
        <div class="contact">
            <?php while (have_posts()) : the_post();
                     the_content();
                endwhile; 
            ?>
        </div>
    </div>
    <div class="clear"></div>
</div>
<?php get_footer(); ?>
