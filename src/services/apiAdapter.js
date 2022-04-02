import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export function setToken(config, idToken = "") {
  if (idToken && idToken !== "") {
    config.headers.common["Authorization"] = `Bearer ${idToken}`;
  }
}

AxiosInstance.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("sessionId");
    if (token) {
      //set interceptor token header
      setToken(config, token);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
AxiosInstance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      // logout
    } else {
      return Promise.reject(error);
    }
  }
);

// returns default axios config
export default AxiosInstance;

export const ApiNoAuth = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const setAccessToken = (token) => {
  localStorage.setItem("sessionId", token);
};
