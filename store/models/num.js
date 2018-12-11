module.exports = {
  state:12,
  reducers: {
    add: (state, payload) => {
      console.log(payload)
      return state+payload
    }

  },
  effects: (dispatch) => ({

  })
}