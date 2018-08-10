/**
 * Created by viruser on 2018/8/10.
 */
import axios from 'axios'
import {Message} from 'element-ui'
import store from '@/store'
import tokenUtils from '@/utils/tokenUtils'
import Qs from 'qs'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8081/',
  headers: {'Content-Type': 'application/json'},
  // timeout: 15000 // 请求超时时间
});
// request拦截器
service.interceptors.request.use((config) => {
  if (store.getters.token) {
    config.headers['token'] = tokenUtils.getToken();
  }
  return config;
}, (error) => {
  Promise.reject(error);
});
// respone拦截器
service.interceptors.response.use((response) => {
  return response;
}, (error) => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  });
  return Promise.reject(error)
})
const xhr = ({method = 'get', url, data = null}) => {
  console.log(method);
  console.log(url);
  console.log(data);
  return service({
    method: method,
    url: url,
    data: data,
    // transformRequest: [(data) => {
    //   return Qs.stringify(data);
    // }]
  })
};
export default xhr;
