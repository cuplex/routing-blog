import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
}) 

axiosInstance.defaults.headers.common['Authorization'] = 'TOKEN_FROM_AXIOS_INSTANCE';

export default axiosInstance;