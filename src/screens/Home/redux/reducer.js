const initialState = {
  recommendedBook: [],
  popularBook: [],
  bookDetail: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECOMMENDED_BOOK':
      return {
        ...state,
        recommendedBook: action.dataRecommended,
      };
    case 'SET_POPULAR_BOOK':
      return {
        ...state,
        popularBook: action.dataPopular,
      };
    case 'SET_DETAIL_BOOK':
      return {
        ...state,
        bookDetail: action.dataDetailBook,
      };

    default:
      return state;
  }
};

export default HomeReducer;
