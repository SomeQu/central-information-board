import axios from "axios";

const instance = axios.create({
  baseURL: " http://35.228.114.191/",
});

export default instance;
