import axios from 'axios';
import Vue from 'vue';
import Qs from 'qs';
import store from '@/store';
import { Loading, Message } from 'element-ui';
const $axios = new axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 30000,
});
Vue.prototype.$http = axios; // 并发请求
let loading = null; // 在全局请求和拦截中添加请求状态

// 请求拦截器: 检查user是否有token
$axios.interceptors.request.use((config) => {
  loading = Loading.service({ text: '拼命加载中～' });
  const token = store.getters.token;
  if (token) {
    config.headers.Authorization = token; // 请求头部添加token
  }
  return config;
});

/**
 * 响应拦截器
 * 1、关闭loading
 * 2、判断各类code码状态
 */
$axios.interceptors.response.use(
  (res) => {
    if (res) {
      loading.close(); // 请求成功关闭loading
      return Promise.resolve(res.data);
    }
  },
  (error) => {
    if (error.response) {
      // 除去200以外的错误状态码
      let message;
      switch (error.response.status) {
        case 400:
          message = '请求参数错误';
          break;
        case 401:
          message = '未获得服务器身份验证';
          break;
        case 403:
          message = '服务器拒绝请求';
          break;
        case 404:
          message = '服务器找不到请求网页';
          break;
        case 405:
          message = '请求方法错误';
          break;
        case 500:
          message = '服务器内部错误';
          break;
        case 502:
          message = '网关错误';
          break;
      }
      Message({
        type: 'warning',
        message,
        showClose: true,
      });
    } else if (error.request) {
      // 客户端已经发出请求，但没有得到响应
      Message({
        type: 'warning',
        message: '请检查网络情况',
        showClose: true,
      });
    } else {
      Message({
        type: 'danger',
        message: error.message,
        showClose: true,
      });
    }
    return Promise.reject(error);
  }
);

export default {
  post(url, data) {
    return $axios({
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' }, // Post请求需要添加请求头
      url,
      data: Qs.stringify(data), // axios默认把Object转成JSON对象，需要使用qs.stringify序列化成URL形式
    });
  },
  get(url, params) {
    return $axios({
      method: 'GET',
      url,
      params,
    });
  },
};
