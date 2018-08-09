/**
 * Created by viruser on 2018/8/9.
 */

const getters = {
  name: state => state.user.name,
  token: state => state.user.token,
  name2: state => state.app.name,
  token2: state => state.app.token
}

export default getters;
