// pages/lists/lists.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:"",
    cid:0,

  },
  images(){
    wx.request({
      url: 'http://58.87.108.188:3000/static/db.json',
      success: res=>{
        // console.log(res.data.listsim)
        this.setData({
          images: res.data.listsim
        })
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.images();
    // console.log(options.cid-1)

    this.setData({
      cid:options.cid
    })
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

  }
})