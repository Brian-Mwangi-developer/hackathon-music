import axios from "axios";

export const ENDPOINT = "http://192.168.87.123:8000";
const BASE_URL = ENDPOINT;

const AxiosUtility = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 100000,
  headers: {
    accept: 'application/json',
    'Cache-Control': 'no-cache',
  }
});

export default AxiosUtility
