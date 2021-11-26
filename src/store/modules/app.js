const state = {
  sidebar: {
    opened: localStorage.getItem('opened') ? !!+localStorage.getItem('opened') : true // !!转化数字为布尔值(首次没有local值使用true意思更加符合open的意思)
  }
}

const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.sidebar.opened = !state.sidebar.opened
    // 若存在，open，设置open为1，反之设置0
    if(state.sidebar.opened) {
      localStorage.setItem('opened', 1)
    } else {
      localStorage.setItem('opened', 0)
    }
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}