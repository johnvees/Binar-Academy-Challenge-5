const initialState = {
  loading: false,
  refreshing: false,
};

const Global = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.status,
      };
    case 'SET_REFRESHING':
      return {
        ...state,
        refreshing: action.refresh,
      };
    default:
      return state;
  }
};

export default Global;
