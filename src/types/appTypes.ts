import store from "store/store";
export type PersonListProps = {
  name: string;
  age: string;
  id: number;
  location: string;
  job: string;
  gender: string;
  history: string;
  comments: string;
};
export type AppDispatch = typeof store.dispatch;
