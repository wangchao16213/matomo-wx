//app.js
App({
  onLaunch: function () {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  globalData: {
    userInfo: null,
    matomoToken:null
  }
})