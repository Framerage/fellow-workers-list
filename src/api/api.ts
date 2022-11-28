import axios from "axios";
import { PersonListProps } from "types/appTypes";

const API_URL = process.env.REACT_APP_API_URL;
const fetchData = axios.create({
  baseURL: API_URL,
});

export const getFetchedPersonList = async () => {
  const responce = await fetchData.get("");
  return responce.data;
};
export const deleteChoosedPersonFromList = async (
  newList: PersonListProps[]
) => {
  await fetchData.get("");
  return newList;
};
export const editChoosedPersonCharacters = async (
  newList: PersonListProps[]
) => {
  await fetchData.get("");
  return newList;
};
