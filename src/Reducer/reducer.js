const reducer = (state, action) => {
  const {type, payload} = action; 
  switch (type) {
    case "GET_SERVICES":
      return {
        ...state,
        services: payload.data,
      };
      case "ADD_TO_CART":
        console.log("ADD_TO_CART", payload);
        return {
        ...state,
        products: payload,
        }
        case "REMOVE_FROM_CART":
          console.log("REMOVE_FROM_CART", payload);
          return {
          ...state,
          products: payload,
          }
        default:
          return state;
  }
};

export default reducer;
