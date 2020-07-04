//logs.js

Page({
  data: {
    lists:[]
  },
  onLoad: function () {
    wx.request({
      url: 'http://58.87.108.188:3000/static/db.json',
      success :res=>{
        // console.log(res.data.lists)
        
        this.setData({
          lists: res.data.lists
        })
      }
    })
  }
})
