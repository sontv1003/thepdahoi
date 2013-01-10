<?php
/**
 * Template Name: Lien He
 */
?>
<?php get_header(); ?>
<div id="main" class="sizePage">
    <div class="fr" style="width: 640px;margin-top: 50px; margin-bottom: 50px;">
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
          <div id="map_canvas" style="width:640px; height:300px"></div>
        </body>
        </html>
        <div>
            Nội dung chi tiết
        </div>
    </div>
    <div class="fl" style="margin-top: 50px; width: 350px; min-height: 400px;">
        <h2>Gửi thông tin</h2>
    </div>
    <div class="clear"></div>
</div>
<?php get_footer(); ?>
