import axios from '../axios.js'
export default {
  async getLotteryIcons() {
    return await axios.get({ key: '0016' });
  },
  async getBanners() {
    return await axios.get({ key: '0000' });
  }
}
