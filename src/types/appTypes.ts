import store from "store/store";
export type PersonListProps = {
  name: string;
  age: number;
  id: number;
  location: string;
  job: string;
  gender: string;
};
export type AppDispatch = typeof store.dispatch;
