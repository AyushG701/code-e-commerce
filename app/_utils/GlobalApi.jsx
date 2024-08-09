const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
});

const getCategory = () => axiosClient.get("/categories?populate=*");

export default {
  getCategory,
};
