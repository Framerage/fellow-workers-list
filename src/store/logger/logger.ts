const logger = (store: any) => (next: any) => (action: any) => {
  //   console.log("dispatching", action);
  console.groupCollapsed("values");
  console.log("before", store.getState());
  console.log("action", action);
  next(action);
  console.log("after", store.getState());
  console.groupEnd();
};
export default logger;
