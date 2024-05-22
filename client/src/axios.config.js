import axios from "axios"

const axiosBaseUrl = axios.create({
  //Localhost
  baseURL: 'http://localhost:8080/api',
})

export default axiosBaseUrl