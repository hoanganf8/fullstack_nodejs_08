export const middleware = (store) => {
  return (action) => {
    // if (action.type === "todo/add") {
    //   store.dispatch({
    //     type: "counter/increment",
    //   });
    // }
    if (typeof action === "function") {
      return action(store.dispatch, store.getState);
    }
    store.dispatch(action);
  };
};
//Bất kỳ dispatch nào sẽ đều chạy qua hàm này
