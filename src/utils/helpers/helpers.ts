import { PersonListProps } from "types/appTypes";

export const editPersonParams = (
  personList: PersonListProps[],
  params: PersonListProps
) => {
  return personList.map((item) => {
    if (item.id === params.id) {
      return {
        ...item,
        gender: params.gender ? params.gender : item.gender,
        age: params.age ? params.age : item.age,
        name: params.name ? params.name : item.name,
        job: params.job ? params.job : item.job,
        location: params.location ? params.location : item.location,
      };
    }
    return item;
  });
};
