//封装wx.request
var app = getApp();
function request(url, postData, doSuccess, doFail, doComplete) {
    var host = getApp().conf.host;
    wx.request({
        url : url,
        data : postData,
        method : 'POST',

        success : function(res){
            if(typeof doSuccess == "function"){
                doSuccess(res);
            }
        },

        fail : function(){
            if(typeof doFail == "function"){
                doFail();
            }
        },

        complete: function(){
            if(typeof doComplete == "function"){
                doComplete();
            }
        }

    })
}