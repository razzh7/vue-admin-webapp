const state = {
  tagsList: []
}

const mutations = {
  ADD_TAGS(state, views) {
    const { title } = views.meta
    if(state.tagsList.some(t => t.title === title)) return /**防止标签切换时重复渲染 */
    state.tagsList.push(Object.assign({}, views, { title }))
  },
  EMPTY_TAGS(state) {
    state.tagsList.map((t,i) => {
      if(t.path === '/dashboard') return
      state.tagsList.splice(i,1)
    })
  },
  REMOVE_TAG(state, route) {
    state.tagsList.map((t,i) => {
      if(t.path === route.path) {
        state.tagsList.splice(i,1)
      }
    })
  }
}

const actions = {
  addTags({ commit }, views) {
    commit('ADD_TAGS', views)
  },
  emptyTags({ commit }) {
    commit('EMPTY_TAGS')
  },
  removeTag({ commit }, route) {
    commit('REMOVE_TAG', route)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

