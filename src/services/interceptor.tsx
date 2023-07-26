import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://loacalhost:5000',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  function (response) {
    return response?.data;
  },
  function (error) {
    if (error.response) {
      const status = error.response.status;
      const responseData = error.response.data;
      console.error('status:',status,"err:",responseData);
    } else if (error.request) {
      console.error('No response:', error.request);
    } else {
      // 发生了其他错误
      console.error('Error Message:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance