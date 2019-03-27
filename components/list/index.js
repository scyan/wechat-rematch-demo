// components/list/index.js
const {connect} = require('wechat-rematch');
function mapStateToData(state){
  return{
    count: state.count.count,
    num: state.num
  }
}
Component(connect(mapStateToData)({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
}))
