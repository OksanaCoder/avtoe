import React from 'react';
import axios from "axios";

const API_URL = process.env.REACT_APP_URL;;

export const register = (
    firstname,
    lastname,
    username,
    email,
    password,
    dob,
    phone
  ) => {
    return axios.post(API_URL + "/users/register", {
      firstname,
      lastname,
      username,
      email,
      password,
      dob,
      phone,
    });
  };

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  
  login,
  logout,
  getCurrentUser,
};
