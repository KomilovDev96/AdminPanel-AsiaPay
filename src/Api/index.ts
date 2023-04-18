import axios from "axios";
import { toast } from "react-toastify";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../Utils/LocalStorege";
import { API_SESSION, CONTENT_TYPE, USERID_SESSION } from "../Constants/others";
import { setIsAuth, setIsNetworkErr } from "../Utils/Dispatch";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

// Handle all configuration of request
api.interceptors.request.use(
  (config: any) => {
    const session = getLocalStorage(API_SESSION);
    config.headers[CONTENT_TYPE] = "application/json";
    config.headers[API_SESSION] = session;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle errors of all responses
api.interceptors.response.use(
  (response) => {
    const { headers } = response;
    const session = headers[API_SESSION];
    if (session) setLocalStorage(API_SESSION, session);
    return response;
  },
  (err) => {
    if (err?.message === "Network Error") {
      setIsNetworkErr(true);
      return Promise.reject(null);
    }
    const error = err.response?.data.error;
    if ([20001].includes(error.code)) {
      toast.error(error.message);
      // alert.error(error.message);
      removeLocalStorage(API_SESSION);
      removeLocalStorage(USERID_SESSION);
      setIsAuth(false);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    return Promise.reject(err.response?.data);
  }
);

export default api;
