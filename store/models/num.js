module.exports = {
  state:12,
  reducers: {
    add: (state, payload) => {
      console.log(state)
      return state+payload
    }

  },
  effects: (dispatch) => ({

  })
}