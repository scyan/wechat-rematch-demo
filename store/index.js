const { createStore } = require("wechat-rematch")
const count = require('./models/count')
const num = require('./models/num')
const store = createStore({
  models: {
    count,
    num
  }
})
module.exports = store