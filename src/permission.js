/**
 * Created by viruser on 2018/8/10.
 */
import router from './router'
import store from './store'
import tokenUtils from '@/utils/tokenUtils' // 验权
import { Message } from 'element-ui'

const whiteList = ['/login']// 不重定向白名单
router.beforeEach((to, from, next)=>{
  console.log(to);
  //判断是否有token
  if(tokenUtils.getToken()){//有token
    //操作判断是否有页面权限
    next();
  } else {//没有token
    //判断路径是否在白名单中
    if(whiteList.indexOf(to.path) >= 0){
      //如果在则直接重定向
      next();
    } else {
      //否则重定向回登录页面
      next("/login");
    }
  }
})
