const istate = {
  product: null
};

const Reducer = (state = istate, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    case "ADD_PRODUCT":
      console.log(action)
      if (state.product===null)
      {
        state.product=[]
      }
      state.product.push(action.payload)
      var p = [...state.product]
      return {...state, product: p};
    case "DELETE_PRODUCT":
      console.log(action.payload)
      if (state.product===null)
      
      {
        state.product=[]
      }
       var p= state.product.filter((item) => item.id !== action.payload)
      
       state.product.push(p)
      return {...state,product:p}
    

    case "EDIT_PRODUCT":
     
      var p=state.product
       console.log(p)

       p[action.payload.id-1]=action.payload
     
      return {...state,product:p}

    default:
      return state;
  }
};
export default Reducer;
