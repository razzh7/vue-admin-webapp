import { login } from "@/api/login"
import { userInfo } from "@/api/userInfo"
import { Message } from "element-ui"
const state = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  userInfo: '',
  avatar: '',
  roles: []
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },
  SET_AVATAR(state, avatar) {
    state.avatar = avatar
  },
  SET_ROLES(state, roles) {
    state.roles = roles
  }
}

const actions = {
  _login({ commit }, formDatas) { // -> dispatch('user/login')
    return new Promise((resolve, reject) => {
      login(formDatas).then(res => {
        if (res.code === 0) {
          const { data } = res;
          Message.success(data.user.msg)
          commit('SET_TOKEN', data.user.token)
          resolve(res)
        } else {
          reject(res)
        }
      })
        .catch(err => {
          reject(err)
        })
    })
  },
  _userInfo({ commit,state }) {
    return new Promise((resolve, reject) => {
      userInfo({ token: state.token }).then(res => {
        if (res.code === 0) {
          const { data } = res
          commit('SET_ROLES', data.roles)
          commit('SET_AVATAR', data.avatar)
          resolve(res.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,  // 开启命名空间 
  state,
  mutations,
  actions
}