module.exports = {
  state: {
    count: 0,
    
  },
  reducers: {
    increment: (state, payload) => {
      return Object.assign(state, { count: state.count + payload })
    },
    minus: (state, payload) => {
      return Object.assign(state, { count: state.count - payload })
    },
    addList: (state, payload) =>{
      
      return Object.assign(state,{list:[1,2,3]})
    }

  },
  effects: (dispatch) => ({
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
    }
  })
}