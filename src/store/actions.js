/**
 * Created by viruser on 2018/8/9.
 */

import LoginApi from '@/api/login'
import TokenUtils from '@/utils/tokenUtils'

const actions = {
  actionSetUserName({commit}, name) {
    commit('SET_USER_NAME', name)
  },
  actionLogin({commit}, userInfo){
    if (userInfo){
      const username = userInfo.username;
      const password = userInfo.password;
      return new Promise( (resolve, reject)=> {
        LoginApi.login(username, password).then((response)=>{
          const data = response.data.data;
          console.log(data);
          //设置store中的token
          commit('SET_USER_TOKEN', data.token);
          //设置cookies中的token
          TokenUtils.setToken(data.token);
          resolve();
        }).catch((error)=>{
          reject(error);
        })
      })

    }
  }
}

export default actions;
