import axios from "axios";

//10.0.3.2

const api = axios.create({
  baseURL: "http://192.168.25.38:3333",
});

export default api;
