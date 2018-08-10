/**
 * Created by viruser on 2018/8/9.
 */

import tokenUtils from '@/utils/tokenUtils'
const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: tokenUtils.getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
  },
}

export default user;
