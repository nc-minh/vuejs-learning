const state = {
  result: 0
}

const getters = {
  tenSanPham: state => {
    return state.result * 10
  },
  nameResult: state => {
    return state.result + 'name product'
  },
}

const mutations = {
  incrementOption(state) {
    state.result++
  },
  decrementOption(state) {
    state.result--
  },
}

const actions = {
  incrementOption: ({
    commit
  }) => {
    commit('incrementOption')
  },
  asyncDecrement: ({
    commit
  }) => {
    setTimeout(() => {
      commit('decrementOption')
    }, 2000)
  },
}

export default {
    state,
    getters,
    mutations,
    actions
}