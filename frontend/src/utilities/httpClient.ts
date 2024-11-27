import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {'Content-Type' : 'application/json'},
});

export default httpClient;

