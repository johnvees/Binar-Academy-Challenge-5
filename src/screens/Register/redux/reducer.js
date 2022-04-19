const initialState = {
  userDataRegist: {},
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POST_REGISTER':
      return {
        ...state,
        userDataRegist: action.userDataRegister,
      };

    default:
      return state;
  }
};

export default RegisterReducer;
