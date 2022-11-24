import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const fetchData = axios.create({
  baseURL: API_URL,
});

export const getFetchedPersonList = async () => {
  const responce = await fetchData.get("");
  return responce.data;
};
