//index.js
var CONFIG = require('../../utils/config.js');
//获取应用实例
var app = getApp()
Page({ 
  data: {
    // motto: 'Hello World',
    // userInfo: {}
    //swiper组件的参数值
    banners:[],//初始化banners数组
    indicatorDots: true,
    autoplay: true, //开启自动切换
    interval: 5000, //自动切换时间间隔
    duration: 1000 //滑动动画时长
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {//页面加载
    console.log('onLoad')
    var _this = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   _this.setData({
    //     userInfo:userInfo
    //   })
    // });

    //发请求
    wx.request ({
      url : CONFIG.API_URL.BANNER_QUERY,
      method : 'GET',
      data : {
        limit: 6,
        img_size: 'small'
      },

      success : function (res) {
        console.log("this is response")
        console.log(res.data)
        if (res.statusCode == 200) {
          console.log("this is response data")
          _this.setData ({
             banners : res.data.objects 
          });
        }
      }
    })
  }
})
