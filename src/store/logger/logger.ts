const logger = (store: any) => (next: any) => (action: any) => {
  //   console.log("dispatching", action);
  console.log("before", store.getState().list.personList);
  const result = next(action);
  console.log(result.payload, "after");
};
export default logger;
