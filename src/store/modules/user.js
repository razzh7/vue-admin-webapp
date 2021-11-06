import { login } from "@/api/login";
import { Message } from "element-ui";
const state = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    userInfo: ''
}

const mutations = {
    SET_TOKEN(state,token) {
        state.token = token;
        localStorage.setItem('token',token);
    }
}

const actions = {
    _login({ commit }, formDatas) { // -> dispatch('user/login')
        return new Promise((resolve, reject) => {
            login(formDatas)
            .then(res => {
                console.log(0,res)
                if(res.code === 0) {
                    console.log(0,'k1')
                    if(res.data.success){
                        console.log(1,'k2')
                        Message.success(res.data.user.msg);
                        commit('SET_TOKEN',res.data.user.token);
                    }
                    resolve(res);
                } else {
                    reject(res)
                }
            })
            .catch(err => {
                console.log(err);
                reject(err);
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