import axios from 'axios';
import {BASE_URL} from '../../../utils';
import {navigate} from '../../../utils/helpers/navigate';
import {store} from '../../../utils/store';
import {setLoading} from '../../../utils/store/globalAction';

const token = store.getState().login.tokenValue;

axios.defaults.headers.Authorization = `Bearer ${token}`;

export const getRecommendedBookData = () => async dispatch => {
  try {
    dispatch(setLoading(true));
    const result = await axios.get(`${BASE_URL}`);

    if (result.status === 200) {
      dispatch(setRecommendedBook(result.data.results));
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getPopularBookData = () => async dispatch => {
  try {
    dispatch(setLoading(true));

    const result = await axios.get(`${BASE_URL}`);

    if (result.status === 200) {
      dispatch(setPopularBook(result.data.results));
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getDetailBookById = id => async dispatch => {
  try {
    dispatch(setLoading(true));
    // console.log(id);
    const result = await axios.get(`${BASE_URL}/${id}`);

    if (result.status === 200) {
      dispatch(setDetailBook(result.data));
      navigate('Detail', {id: `${id}`});
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const setRecommendedBook = payload => {
  return {
    type: 'SET_RECOMMENDED_BOOK',
    dataRecommended: payload,
  };
};

export const setPopularBook = payload => {
  return {
    type: 'SET_POPULAR_BOOK',
    dataPopular: payload,
  };
};

const setDetailBook = payload => {
  return {
    type: 'SET_DETAIL_BOOK',
    dataDetailBook: payload,
  };
};
