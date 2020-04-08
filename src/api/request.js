import axios from 'axios';
import router from '../router';
// 创建axios实例
const service = axios.create({
  baseURL:"http://localhost:8080/Mvc01_war_exploded",
  timeout: 5000,
})
// 添加request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})
// 添加respone拦截器
service.interceptors.response.use(
  response => {
    let res={};
    res.status=response.status
    res.data=response.data;
    return res;
  },
  error => {
    if(error.response && error.response.status == 404){
      console.log(error)
    }
    return Promise.reject(error.response)
  }
)


//不要忘记export
export {
  service
}
