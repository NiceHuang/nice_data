/**
 * Created by viruser on 2018/8/7.
 */
import xhr from '@/utils/request'

const LoginApi = {
    login(username, password){
      const data = {
        email: username,
        username: username,
        password: password
      };
      return xhr({
        method: 'post',
        url: '/login',
        data
      });
    }
}
export default LoginApi
