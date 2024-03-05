import axios from 'axios';
const config = { withCredentials: true };
const API_URL = 'http://localhost:3050/api';
export const postEmail = async (data) => {
    axios.post(`${API_URL}/auth/sendMail`, data ,config)
}
export const postRegister = async (data) => {
    const res = axios.post(`${API_URL}/auth/register`, data ,config)
    return res;
}
export const postValidRegister = async (data) => {
    axios.post(`${API_URL}/auth/statusValid`, data ,config)
}
export const postLogin = async (data) => {
    axios.post(`${API_URL}/auth/login`, data ,config)
}
export const getAuthUser = () => {
    return axios.get(`${API_URL}/auth/status`,config)
}
