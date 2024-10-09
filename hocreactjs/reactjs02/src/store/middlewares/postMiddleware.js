export const getPosts = () => {
  return async (dispatch) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    dispatch({
      type: "post/update",
      payload: data,
    });
  };
};

//Thunk Function
