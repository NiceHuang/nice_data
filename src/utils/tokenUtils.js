/**
 * Created by viruser on 2018/8/10.
 */
import Cookies from 'js-cookie'

const TokenKey = 'data_portral_token'

const tokenUtils = {
  getToken(){
    return Cookies.get(TokenKey)
  },
  setToken(token){
    return Cookies.set(TokenKey, token)
  },
  removeToken(){
    return Cookies.remove(TokenKey)
  }

}
export default tokenUtils;
