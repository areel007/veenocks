// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken")
  );

  useEffect(() => {
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [accessToken]);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "https://veenocks-cms.onrender.com/api/auth/login",
        {
          username,
          password,
        }
      );
      const { accessToken, refreshToken } = response.data.user;

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", response.data.user._id);
      window.location = "/cms/dashboard/home";
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errors[0].msg);
      } else {
        setErrorMessage(error.response.data.message);
      }

      console.error("Login error", error);
    }
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const refreshTokens = async () => {
    try {
      const response = await axios.post(
        "https://veenocks-cms.onrender.com/api/auth/refresh-token",
        {
          refreshToken,
        }
      );
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        response.data;

      console.log(response.data);

      setAccessToken(newAccessToken);
      setRefreshToken(newRefreshToken);
      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", newRefreshToken);
    } catch (error) {
      console.error("Refresh token error", error);
      logout();
    }
  };

  const handleEditPassword = async (id, passwordInput) => {
    const url = "https://veenocks-cms.onrender.com/api/users";

    try {
      const response = await axios.patch(`${url}/${id}`, passwordInput);

      setToggleEditPassword(false);
      setToggleDeleteModal(false);

      return response.status;
    } catch (error) {
      // if (error.response.status === 400) {
      //   setErrorMessage(error.response.data.errors[0].msg);
      // } else {
      //   setErrorMessage(error.response.data.message);
      // }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        refreshTokens,
        login,
        logout,
        errorMessage,
        handleEditPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
