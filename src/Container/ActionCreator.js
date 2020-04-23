
export const addProductAction = (input) => {
  console.log(input);
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "Post",
      body: JSON.stringify(input),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => dispatch({ type: "ADD_PRODUCT", payload: result }));
  };
};

export const getProductAction = (input) => {
  console.log(input);
  return (dispatch) => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch({ type: "GET_PRODUCT", payload: result }))
      .catch((error) => console.log({ error }));
  };
};

export const deleteProductAction = (id) => {
  console.log(id);
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((response) =>{console.log(response)
        dispatch({ type: "DELETE_PRODUCT", payload: id })}
      );
  };
};

export const editProductAction = (input) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${input.id}`, {
      method: "PUT",
      body: JSON.stringify(input),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
      .then((response) => response.json())
      .then((response) =>{console.log(response)
        dispatch({ type: "EDIT_PRODUCT", payload: response })}

      )
      .catch(error=> console.log({error}));
  };
};
