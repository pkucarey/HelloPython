$(function(){
    var locUrl = window.location.href;
    //console.log("locUrl:"+locUrl)
    var shareUrl = "http://wy.news.cn/newcms/signatureServlet?url=" + locUrl;
    //alert("shareUrl:"+shareUrl)
    $.when($.ajax({
        async: true,
        //async: false,
        url: shareUrl,
        type: 'GET',
        dataType: 'jsonp',
        jsonp: 'callback'
    })).then(function(json) {
        var timestamp = json.timestamp;
        var nonceStr = json.nonceStr;
        var signature = json.signature;
        //console.log(json);
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx2094ab6ecab995d2', // 必填，公众号的唯一标识
            timestamp:timestamp, // 必填，生成签名的时间戳
            nonceStr: nonceStr, // 必填，生成签名的随机串
            signature: signature,// 必填，签名，见附录1
            jsApiList: ['checkJsApi','onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2

              /*
               * 注意：
               * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
               * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
               * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
               *
               * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
               * 邮箱地址：weixin-open@qq.com
               * 邮件主题：【微信JS-SDK反馈】具体问题
               * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
               */

        });
        wx.ready(function(){

            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
            wx.checkJsApi({
              jsApiList: [
                'getNetworkType',
                'previewImage'
              ],
              success: function (res) {
                //alert(JSON.stringify(res));
              }
            });

            var shareTit = $.trim($(".shareTit").html());
            var sharesum = $.trim($(".sharesum").html());
            var shareImg = $(".shareImg").find("img").attr("src");
            var shareUrl = window.location.href;
			/*console.log("标题"+shareTit)
			console.log("摘要"+sharesum)
			console.log("图片"+shareImg)
            console.log("链接"+shareUrl)*/
          // 2. 分享接口
          // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareAppMessage({
              title: shareTit,
              desc: sharesum,
              link: shareUrl,
              imgUrl: shareImg,
              trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                //alert('用户点击发送给朋友');
              },
              success: function (res) {
                //alert('已分享');
              },
              cancel: function (res) {
                //alert('已取消');
              },
              fail: function (res) {
                //alert(JSON.stringify(res));
              }
            });

          // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareTimeline({
                title: shareTit,
                link: shareUrl,
                imgUrl: shareImg,
              trigger: function (res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                ///alert('用户点击分享到朋友圈');
              },
              success: function (res) {
                //alert('已分享');
              },
              cancel: function (res) {
                //alert('已取消');
              },
              fail: function (res) {
                //alert(JSON.stringify(res));
              }
            });

          // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareQQ({
                title: shareTit,
                desc: sharesum,
                link: shareUrl,
                imgUrl: shareImg,
              trigger: function (res) {
                //alert('用户点击分享到QQ');
              },
              complete: function (res) {
                //alert(JSON.stringify(res));
              },
              success: function (res) {
                //alert('已分享');
              },
              cancel: function (res) {
                //alert('已取消');
              },
              fail: function (res) {
                //alert(JSON.stringify(res));
              }
            });

          // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareWeibo({
                title: shareTit,
                desc: sharesum,
                link: shareUrl,
                imgUrl: shareImg,
              trigger: function (res) {
                //alert('用户点击分享到微博');
              },
              complete: function (res) {
                //alert(JSON.stringify(res));
              },
              success: function (res) {
                ///alert('已分享');
              },
              cancel: function (res) {
                //alert('已取消');
              },
              fail: function (res) {
                //alert(JSON.stringify(res));
              }
            });

          // 2.5 监听“分享到QZone”按钮点击、自定义分享内容及分享接口
            wx.onMenuShareQZone({
                title: shareTit,
                desc: sharesum,
                link: shareUrl,
                imgUrl: shareImg,
              trigger: function (res) {
                //alert('用户点击分享到QZone');
              },
              complete: function (res) {
                //alert(JSON.stringify(res));
              },
              success: function (res) {
                //alert('已分享');
              },
              cancel: function (res) {
                //alert('已取消');
              },
              fail: function (res) {
                //alert(JSON.stringify(res));
              }
            });
        });

    }, function() {

    });

})
