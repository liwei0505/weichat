Page({
  data: {
    text: "This is page data.",
    detail: "detail infomation"
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载 接收页面参数可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的 query
    var appInstance = getApp()
    console.log(appInstance.globalData)
  },
  //   onReady:function(){
  //     // 生命周期函数--监听页面初次渲染完成 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互 对界面的设置如wx.setNavigationBarTitle请在onReady之后设置
  //     String3
  //   },
  //   onShow:function(){
  //     // 生命周期函数--监听页面显示 每次打开页面都会调用一次
  //     String4
  //   },
  //   onHide:function(){
  //     // 生命周期函数--监听页面隐藏 navigateTo或底部tab切换时调用
  //     String5
  //   },
  //   onUnload:function(){
  //     // 生命周期函数--监听页面卸载 redirectTo或navigateBack的时候调用
  //     String6
  //   },
  //   onPullDownRefresh: function() {
  //     // 页面相关事件处理函数--监听用户下拉动作
  //     String7
  //   },
  //   onReachBottom: function() {
  //     // 页面上拉触底事件的处理函数
  //     String8
  //   },
  onShareAppMessage: function () {//分享功能 
    // 用户点击右上角分享 定义了此事件处理函数，右上角菜单才会显示“分享”按钮
    return {
      title: '民金所', // 分享标题 当前小程序名称
      desc: '民金1号', // 分享描述
      path: 'www.baidu.com'  // 分享路径
    }
  },
  onError: function (msg) {
    //当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
    console.log(msg)
  },
  // 事件处理函数
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    })
    wx.stopPullDownRefresh() //结束下拉刷新
  },
  customData: {
    hi: 'li wei'
  }
})