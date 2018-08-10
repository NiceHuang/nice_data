/**
 * Created by viruser on 2018/8/9.
 */
const mutations = {
  SET_USER_NAME:(state, name) => {
    state.user.name = name
  },
  SET_USER_TOKEN:(state, token) => {
    state.user.token = token;
  },
}
export default mutations;
