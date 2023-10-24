const reducer = (state, action) => {
  switch (action.type) {
    case "GET_SERVICES":
      return {
        ...state,
        services: action.payload.data,
      };
  }
};

export default reducer;
