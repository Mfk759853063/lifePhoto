import axios from 'axios';

const Photo = {
  getLifeList(data = {}) {
    const params = Object.assign({}, data);
    return axios.get('/photos/life', { params });
  },
};

export default Photo;

