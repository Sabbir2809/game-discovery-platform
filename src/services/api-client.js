import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5fd7ab9559434969b77dffa867c9d4de',
  },
});
