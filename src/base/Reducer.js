const reducer = (state, action) => {
    switch (action.type) {
      case "add-user":
        return { ...state, user: [...state.user, action.payload] };
      case "delete-user":
        return { ...state, user: action.payload };
      case "edit-user":
        return { ...state, user: [...state.user] };
      case "get-from-stu-api":
        return { ...state, user: action.payload };
      case "get-from-tec-api":
        return { ...state, user1: action.payload };
      case "delete-teacher":
        return{ ...state, user1: action.payload };
      case "teacher":
          return { ...state, user1: [...state.user1, action.payload] };
      case "user":
        return { ...state, user1: [...state.user1] };

      default:
        return state;
    }
  };
  export default reducer;