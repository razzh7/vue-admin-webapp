import { login } from "@/api/login"
import { Message } from "element-ui"
const state = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    userInfo: '',
    avatar: ''
}

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
        localStorage.setItem('token',token)
    },
    SET_AVATAR(state, avatar) {
        state.avatar = avatar
    }
}

const actions = {
    _login({ commit }, formDatas) { // -> dispatch('user/login')
        return new Promise((resolve, reject) => {
            login(formDatas)
            .then(res => {
                if(res.code === 0) {
                    console.log('用户数据',res)
                    const { data } = res;
                    Message.success(data.user.msg)
                    commit('SET_TOKEN', data.user.token)
                    commit('SET_AVATAR',data.user.avatar)
                    resolve(res)
                } else {
                    reject(res)
                }
            })
            .catch(err => {
                console.log(err)
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