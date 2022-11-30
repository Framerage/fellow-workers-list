import {PersonListProps} from "types/appTypes";

export const editPersonParams = (
  personList: PersonListProps[],
  params: PersonListProps,
) => {
  return personList.map(item => {
    if (item.id === params.id) {
      return {
        ...item,
        gender: params.gender ? params.gender : item.gender,
        age: params.age ? params.age : item.age,
        name: params.name ? params.name : item.name,
        job: params.job ? params.job : item.job,
        location: params.location ? params.location : item.location,
        history: params.history ? params.history : item.history,
        comments: params.comments ? params.comments : item.comments,
      };
    }
    return item;
  });
};

export const editWordFirstSymbolToUpperCase = (text: string) => {
  return text[0].toUpperCase() + text.slice(1);
};
export const getObjectValues = (obj: {}, params: any[]) => {
  return Object.values(obj).filter(
    el => el && el === params.map(param => param),
  );
};
export const getObjectKeys = (obj: {}, params: string[]) => {
  return Object.values(obj).filter(el => el !== params.map(param => param));
};
export const getObjectEntries = (obj: {}, params: string[]) => {
  return Object.entries(obj).filter(el => params.includes(el[0]));
};
export const someDelay = async (num: number) => {
  await new Promise(resolve => setTimeout(resolve, num));
};
