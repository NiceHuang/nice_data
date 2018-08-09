/**
 * Created by viruser on 2018/8/9.
 */
const actions = {
  actionSetUserName({commit}, name) {
    setTimeout(()=>{
      commit('SET_USER_NAME', name)
    }, 2000);
  }
}

export default actions;
