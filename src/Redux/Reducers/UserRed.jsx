const UserRed = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      return action.payload;
    case "GET_USER_ERROR":
      return action.payload;
    case "GET_USER_SUCCESS":
      return action.payload;
    case "GET_USER_FAILURE": 
      return action.payload;
    case "GET_USER_REQUEST":
      return action.payload;
    default:
      return state;
  }
};

export default UserRed;
