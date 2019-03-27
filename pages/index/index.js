//index.js
//获取应用实例
const { connect } = require("wechat-rematch")
const app = getApp()
function mapStateToData(state) {
  return {
    count: state.count.count,
    list: state.count.list||[],
    num: state.num
  }
}
Page(connect(mapStateToData)({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  add:function(){
    this.dispatch.count.increment(1)
  },
  addNum: function(){
    this.dispatch.num.add(1)
  },
  addList:function(){
    this.dispatch.count.addList(4)
    
  },
  onShow: function(){
    
  },
  redirect: function(){
    wx.navigateTo({
      url: '/pages/detail/index?id=1'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
}))
