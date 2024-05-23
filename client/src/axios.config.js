import axios from "axios"

const axiosBaseUrl = axios.create({
  //Localhost
  // baseURL: 'http://localhost:8080/api',

  //deployed version of television-networks-app server on render.com
  baseURL: 'https://television-networks-app-gzf2.onrender.com/api',
})

export default axiosBaseUrl;