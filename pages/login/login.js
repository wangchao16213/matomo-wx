// pages/login/login.js
const common = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: null,
    password: null,
    token: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleLogin: function (e) {
    console.log(wx.getStorageInfoSync())
    const token_auth = "11fb49d372c41c47db0a02c7ab36ef81";
    wx.setStorageSync('token_auth', token_auth);

    wx.request({
      url: common.baseUrl + 'method=SitesManager.getAllSites',
      success: function (res) {
        //TODO 站点管理API请求测试
        wx.setStorageSync('sites', res.data);
        //设置第一个站点为当前选中站点
        wx.setStorageSync('currentSite', res.data[0]);
        wx.switchTab({
          url: '../visitor/visitor',
        });
      },
      fail:function(e){
        console.log(e);
      }
    });
  }
})