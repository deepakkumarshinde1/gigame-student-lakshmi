import axios from "axios";
import { getCookies } from "./authCookies";

export const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

// interceptors
api.interceptors.request.use((config) => {
  let token = getCookies();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
