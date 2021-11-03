import axios from "axios";
import Vue from "vue";
import store from "@/store"
import { Loading } from "element-ui";

const $axios = new axios({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

Vue.prototype.$http = axios; // 并发请求
let loading = null; // 在全局请求和拦截中添加请求状态

// 请求拦截器: 检查user是否有token
$axios.interceptors.request.use(
    config => {
        loading = Loading.service({text: '拼命加载中～'});
        const token = store.getters.token;
        if(token) {
            config.headers.Authorization = token; // 请求头部添加token
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

/**
 * 响应拦截器
 * 1、关闭loading
 * 2、判断各类code码状态
 */
$axios.interceptors.resquest.use(
    
)

