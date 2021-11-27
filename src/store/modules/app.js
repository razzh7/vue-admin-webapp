const state = {
  sidebar: {
    opened: localStorage.getItem('opened') ? !!+localStorage.getItem('opened') : true // !!转化数字为布尔值(首次没有local值使用true意思更加符合open的意思)
  },
  device: 'desktop'
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
  },
  COLSE_SIDEBAR(state) {
    state.sidebar.opened = false
  },
  TOGGLE_DEVICE(state, device) {
    state.device = device
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSidebar({ commit }) {
    commit('COLSE_SIDEBAR')
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE',device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}