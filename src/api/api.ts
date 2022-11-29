import axios from "axios";
import {PersonListProps} from "types/appTypes";
import {someDelay} from "utils/helpers/helpers";

const API_URL = process.env.REACT_APP_API_URL;
const fetchData = axios.create({
  baseURL: API_URL,
});

export const getFetchedPersonList = async () => {
  await someDelay(1000);
  const responce = await fetchData.get("");
  return responce.data;
};
export const deleteChoosedPersonFromList = async (
  newList: PersonListProps[],
) => {
  try {
    await someDelay(3000);
    await fetchData.get("");
    console.log("delete from api");
    return newList;
  } catch (e) {
    console.log(e, " errorrrrr");
  }
};
export const editChoosedPersonCharacters = async (
  newList: PersonListProps[],
) => {
  // await fetchData.get("");
  // return newList;
  console.log("edit");
  await fetchData.get("");
  await someDelay(3000);
  return newList;
};
