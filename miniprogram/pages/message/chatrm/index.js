// pages/message/chatrm/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i:0,
    inputMessage : '',
    histMess : [
    ]
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

  onClick: function(){

  },

  formSubmit(e){
    if(e.target.id=="sub"){

    }
  },

  textChange(e){
    this.setData({
      inputMessage : e.detail.value,
    });
    console.log(this.data.inputMessage);
  },

  inputRenew(e){
    var history = this.data.histMess;
    history.push({
      message: this.data.inputMessage,
      response: 'this is a response'
    });
    var i = this.data.i;
    this.setData({
      inputMessage : '',
      i : i+1,
      histMess : history
    })
    console.log(this.data.histMess)
  }
})