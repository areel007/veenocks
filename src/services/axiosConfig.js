// axiosConfig.js
import axios from "axios";
import { AuthContext } from "../context/AuthContext.js";
import React, { useContext } from "react";

const useAxios = () => {
  const { refreshTokens } = useContext(AuthContext);

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          await refreshTokens();
          return axios(originalRequest);
        } catch (e) {
          return Promise.reject(e);
        }
      }

      return Promise.reject(error);
    }
  );

  return axios;
};

export default useAxios;
