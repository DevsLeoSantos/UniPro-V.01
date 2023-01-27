import axios from "axios";

export const api = axios.create({
  baseURL: "http://54.207.15.167:3000",
});
