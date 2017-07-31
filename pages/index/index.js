//index.js
var wxSearch = require('../../wxSearch/wxSearch.js')
//获取应用实例
var app = getApp()
Page({
  data: {},
  onLoad: function () {
    var _search = new wxSearch({
      prefix: 'test_'
    })
    console.dir(_search.getConfig())
  }
})
