import Axios from 'axios'
import CONFIG from './config'
let axios = Axios.create({
  // withCredentials: true,
  baseURL: CONFIG['API_HOST']
});
let params = {
  tag_from: CONFIG['TAG_FROM'],
  t_from: CONFIG['TAG_FROM'],
  p_from: CONFIG['PRO_FROM'],
  pro_from: CONFIG['PRO_FROM']
}

export default {
  async get(data) {
    let response = await axios.get(CONFIG['API_PREFIX'], { params: Object.assign({}, data, params) })
    return response.data;
  },
  async post(data) {
    let response = await axios.post(CONFIG['API_PREFIX'], data, { params });
    return response.data;
  }
}
