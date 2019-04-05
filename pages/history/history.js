Page({
  data:{
    name:'123'
  },
  
  showHello:function(e){
    console.log('hello')
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }
})