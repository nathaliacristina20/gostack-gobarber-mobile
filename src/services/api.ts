import axios from 'axios';

import { BASE_URL } from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'http://192.168.0.12:3333',
});

export default api;
