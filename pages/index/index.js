//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    categories:[],
    categoriestwe:[],
    homeswiper:[],
    search: [],

    searchtxt:'',

    show:false,
    dialogShow: false,
    oneButton: [{ text: '确定' }],
    list: []
  },
  getslides(){
    wx.request({
      url: 'http://127.0.0.1:3000/static/db.json',
      success: res => {
        // console.log(res)

        this.setData({
          categoriestwe: res.data.categories,
          homeswiper: res.data.slides,
          categories: res.data.categories.splice(0,5),
          list: res.data.images,
          search: res.data.search
        })
        console.log(res.data.search)
        console.log(res.data.images)
      }
    })
  },
  onLoad () {
    this.getslides();
  },
  // onPullDownRefresh: ()=> {
    // wx.startPullDownRefresh({
    //   success:res=>{
    //     console.log(66)
    //   }
    // })
  //   wx.stopPullDownRefresh({
  //     success :res=>{
  //       console.log(99)
  //     }
  //   })
    // console.log(88)
    // Do something when pull down.
  // },
  
  // 搜索框点击事件
  search(){
    // console.log(this.data.categories)
      var a = false
    for (var j = 0; j < this.data.categories.length; j++) {
      var s = this.data.categories[j].name;
      var i = s.indexOf(this.data.searchtxt);
      if(i!=-1){
        a=true
      }
      if (a) {
        this.setData({
          dialogShow: true
        });
      }
    }
    
    },

      /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.categoriestwe.length !=0){
    this.setData({
      show:true
    })
    
    setTimeout(()=>{
      this.setData({
        categories: this.data.categories.concat(this.data.categoriestwe.splice(0, 5)),
        show: false
      })
    }, 1000)
    }
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false
    })
  }
})
