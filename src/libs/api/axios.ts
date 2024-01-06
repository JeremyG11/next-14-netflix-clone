import axios from "axios";

export const apiInstance = axios.create({
  baseURL: process.env.API_BASE_URL!,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer  ${process.env.AUTH_TOKEN!}`,
  },
  timeout: 5000,
});
