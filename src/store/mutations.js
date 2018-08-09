/**
 * Created by viruser on 2018/8/9.
 */
const mutations = {
  SET_USER_NAME:(state, name) => {
    state.user.name = name
  },
  SET_APP_TOKEN:(state, token) => {
    setTimeout(()=>{
      state.app.token = token;
    }, 2000);
    // state.app.token = token;
  },
}
export default mutations;
