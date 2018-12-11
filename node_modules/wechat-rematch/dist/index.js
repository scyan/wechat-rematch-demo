
let diff = require('object-diff')
const Provider =require('provider')
const connect =require('connect')
const createStore =require('createStore')



let innerStore={}


module.exports={
  Provider,
  connect,
  createStore
}