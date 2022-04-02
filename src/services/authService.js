import axios, { ApiNoAuth } from "./apiAdapter";

export const login = (userData) =>
  ApiNoAuth.post("/oauth/token", userData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: process.env.REACT_APP_AUTH_USERNAME,
      password: process.env.REACT_APP_AUTH_PASSWORD,
    },
  });

export const register = (data) =>
  ApiNoAuth.post("/employee/registerSuperAdmin", data);

export const fetchEmpDetails = async (empId) =>
  axios.get(`/employee/getLoggedInEmployeeDetails?empId=${empId}`);

export const handleLogout = () => {
  localStorage.clear();
  localStorage.clear();
  window.location.href = "/auth/login";
};

export const sendPasswordForgotPassword = async (email) =>
  ApiNoAuth.post(`/employee/forgotPassword`, { email });

export const sendPasswordReset = async (data) =>
  ApiNoAuth.put(`/employee/resetPassword`, data);
