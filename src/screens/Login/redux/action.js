import axios from 'axios';
import {Alert} from 'react-native';

import {BASE_AUTH} from '../../../utils';
import {navigate} from '../../../utils/helpers/navigate';
import {setLoading} from '../../../utils/store/globalAction';

export const postLoginAction = data => async dispatch => {
  try {
    dispatch(setLoading(true));

    const result = await axios.post(`${BASE_AUTH}/login`, data);

    if (result.status === 200) {
      dispatch(setLogin(result.data.results));
      console.log(result);
      console.log(result.data.tokens.access.token);
      dispatch(setToken(result.data.tokens.access.token));
      navigate('Home');
    }
  } catch (error) {
    Alert.alert('Error', 'Email and Password Not Found');
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

setLogin = payload => {
  return {
    type: 'SET_POST_LOGIN',
    userDataLogin: payload,
  };
};

export const setToken = payload => {
  return {
    type: 'SET_TOKEN',
    token: payload,
  };
};
