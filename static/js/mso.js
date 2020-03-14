<!DOCTYPE html>
<html lang="zh-CN" id="moulemHtml">
    <head>
        <meta charset="UTF-8">
        <title>某柠檬_柠檬味的导航</title>
        <meta name="keywords" content="某柠檬,某柠檬导航,某柠檬主页,某柠檬 柠檬味的导航,某柠檬导航网,某柠檬首页,moulem,上网导航,柠檬导航,某柠檬网,网址大全,简约导航网站,简洁网址导航,导航123,网址导航,网站导航" />
        <meta name="description" content="某柠檬导航是一个轻导航网站，提供一个清爽干净的上网入口。某柠檬，柠檬味的导航，清爽界面，简约导航，希望通过某柠檬导航大家能有一个好的上网浏览心情，以及便捷的网址导航体验。" />
        <link rel="stylesheet" type="text/css" href="/static/zui/css/zui.min.css?v=2016.11.17.2" />
        <link rel="stylesheet" type="text/css" href="//at.alicdn.com/t/font_716225_9byylqtxsca.css">
        <link rel="stylesheet" type="text/css" href="/static/jquery-ui.css"/>
        <link type="text/css" rel='stylesheet' href="/static/moulem.css?v=19.1111">
        <!-- <link rel="stylesheet" type="text/css" href="/static/mso.css?v=19.2603"> -->
        <script src='//libs.baidu.com/jquery/1.9.0/jquery.js?v=18.11' type='text/javascript'></script>
        <script type="text/javascript" src="/static/keyword.js?v=19.1111"></script>
        <script type="text/javascript" src="/static/moulem.js?v=19.1"></script>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon">
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">

        <script src="/static/vue.min.js"></script>
        <script src="/static/zui/js/zui.min.js?v=2016.11.17"></script>
        <script src="/static/jquery-ui.min.js"></script>

        <!--手机端跳转-->
        <script type="text/javascript">
            var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
            var browser = navigator.userAgent.toLowerCase();
            var isMobile = false;
            for (var i=0; i<mobileAgent.length; i++){ if (browser.indexOf(mobileAgent[i])!=-1){ isMobile = true;
//alert(mobileAgent[i]);
                location.href = 'http://m.moulem.com/';
                break; } }
        </script>

    </head>
<body id="moulemBody">


<!--     <div id="msoBigBox">
        <div id="msoLogo"></div>
        <div id="msoInputBox">
            <ul id="msoChangeBox">

            </ul>
            <div id="msoType"></div>
            <form action="" method="GET" target="_blank" id='msoSearchCheck'>
                <input id="msoInput" type="text" name="" class="msoInputClass" autocomplete="off" lang="zh-CN">
            </form>
            <div class="msoKeyWord"></div>
        </div>

        <ul id="msoBtnBox">

        </ul>
        <img id="msoLock" title="锁定/解锁快搜条">     
    </div> 
    <div id="msoBigBoxLine0"></div>
    <div id="msoBigBoxLine1"></div>
    <div id="moulemSearchBox">
        <iframe id="moulemSearch" src="" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
    </div>-->



<script>
    var $CONF = {};
    $CONF['is_guest'] = '1';
    $CONF['base_url'] = '';
    $CONF['site_url'] = '/';
    $CONF['img_base_url'] = "//uploads.moulem.com";
    $CONF['path_info'] = "static/mso.js";
    $CONF['user_id'] = '';
</script>

<script>
    $.ajaxSetup({dataType:"json", type:"post"});
    $('[data-toggle="tooltip"]').tooltip();

    function showSuccess(content){
        var myMessager = new $.zui.Messager({placement:'top',type: 'success',icon:'ok-sign'});
        myMessager.show(content);
    }
    function showError(content){
        var myMessager = new $.zui.Messager({placement:'top',type: 'danger',icon:'warning-sign'});
        myMessager.show(content);
    }
</script>

<div class="w" id="w">
    <div class="error" style="width: 1000px;height: 500px;margin:100px auto 0 auto;">
    <!--<p><img src="/img/404.png" alt="404错误页面" /></p>
    <p><a href="/" class="btn btn-primary">返回首页</a></p>-->

    <p style="font-size: 90px;">404错误 :(</p>
    <p style="font-size: 26px;">是不是输入网址的时候手抖了一下呢~</p>
    <p style="margin:20px auto 20px auto"><a href="/" class="btn btn-primary">返回首页</a></p>
</div>

</div>

<!--滑动弹出<div id="recoPage"><div class="recoBtn"></div></div>-->

<script src="/assets/a6713218/yii.js"></script>
<!-- <script type="text/javascript" src="/static/mso.js?v=19.0806"></script> -->

</body>
</html>
