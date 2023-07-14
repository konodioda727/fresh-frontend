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
      if (status === 404) {
        console.error('路径写对没？');
      } else if (status === 401) {
        console.error('token带了没？');
      } else if (status === 400) {
        console.error('发的很好，下次别再发了');
      } else if (status === 405) {
        console.error('根本就没这方法');
      } else if (status === 403) {
        console.error('你小子被forbidden了');
      } else if (status === 500) {
        console.error('我觉得不是你的问题');
      } else {
        console.error('Error Status:', status);
        console.error('Error Data:', responseData);
      }
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