import axios from 'axios'

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL =  'https://fakestoreapi.com/'


axiosInstance.interceptors.request.use(
    // we can do something here before create actual request to the backend.. 
    function (response) {
      return response;
    }, 
    function (error) {
      return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    // we can do something here before handing then and catch block ,I am here returning response.data
    function (response) {
      return response.data;
    }, 
    function (error) {
      return Promise.reject(error);
    }
);

export default axiosInstance