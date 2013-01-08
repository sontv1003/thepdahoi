<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <title>Cty TNHH Sắt thép Hiền Đường</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/jquery.js"></script>
    </head>
    <body>
        <a href="#top"></a>
        <div id="container">
            <div id="w_top">
                <div class="search sizePage">
                    <div class="fl" style="margin-top: 10px;">Hotline: 090.444.9512</div>
                    <a title="Fanpage Thép Hiền Đường"  href="#"><img class="fr" src="images/facebook.png" /></a>
                    <a title="Twitter Thép Hiền Đường" href="#"><img class="fr" src="images/twitter.png" /></a>
                    <input class="fr btnSearch" type="submit" value="Tìm kiếm"/>
                    <input class="txt_search" type="text" value="Nhập nội dung" onfocus="if(this.value=='Nhập nội dung') this.value='';" onblur="if(this.value=='') this.value='Nhập nội dung'"/>
                    <div class="clear"></div>
                </div>
                <div id="w_header">                    
                    <div id="header" class="sizePage">
                        <div class="logo fl">
                            <a href="index.php"><img src="images/logo.png" /></a>
                        </div>
                        <div id="menu" class="fr">
                            <ul>                                
                                <li class="active"><a href="#">Trang chủ</a></li>
                                <li><a href="#">Giới thiệu</a></li>
                                <li><a href="#">Sản phẩm</a></li>
                                <li><a href="news.php">Tin tức</a></li>
                                <li><a href="#">Báo giá</a></li>
                                <li><a href="contact.html">Liên hệ</a></li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div id="w_slideshow">
                    <div id="slideshow" class="sizePage">
                    </div>
                </div>
            </div>
            <div id="main" class="sizePage">
                <div style="margin-top: 50px;">
                    <div class="news_list fl">
                        <h2>Tin tức mới nhất<img class="dot" src="images/dot.png" /></h2>
                        <div class="box home_news">
                            <?php for($i=0;$i<5;$i++) { ?>
                            <div class="row">
                                <div class="fl news_img">
                                    <a href="#"><img src="images/steel1.jpg" /></a>
                                </div>
                                <div class="fr description">
                                    <div class="title"><a href="#">Lorem ipsum dolor sit amet</a></div>
                                    <span class="des">Lorem  unt unt rutrum auctor sit amet augue. Aliquam erat volunt rutrum auctor sit 
                                        amet augue. Aliquam erat vol rutrum auctor sit amet augue. Aliquam erat vol ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur ultricies commodo rhoncus.</span>
                                    <a href="#" class="button">Xem chi tiết</a>
                                </div>
                            </div>
                            <?php } ?>
                        </div>
                    </div>
                    <div class="fr widget box">
                        <h2>MENU PHẢI<img class="dot" src="images/dot.png" /></h2>
                        <h2>Hỗ trợ trực tuyến<img class="dot" src="images/dot.png" /></h2>
                        <div class="box">
                            <ul class="livechat">
                                <li>
                                    <label>Mr. Hoàng</label>
                                    <span><a href="ymsgr:sendim?minhhoanghi" mce_href="ymsgr:sendim?minhhoanghi" border="0"><img src="http://opi.yahoo.com/online?u=minhhoanghi&t=2" mce_src="http://opi.yahoo.com/online?u=minhhoanghi&t=2"></a></span>             
                                    <div class="clear"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
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
    </body>
</html>
<script>
    $('#btnUp').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
</script>