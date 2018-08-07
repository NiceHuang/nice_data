/**
 * Created by viruser on 2018/8/7.
 */

const xhr = (method = 'get', url, data = null) => {
  return axios({
    method: method,
    url: url,
    data: data,
    transformRequest: [(data) => {
      return JSON.stringify(data);
    }]
  })
};
export default xhr;
