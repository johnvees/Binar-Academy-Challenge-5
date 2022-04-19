import axios from 'axios';

import {BASE_AUTH} from '../../../utils';
import {navigate} from '../../../utils/helpers/navigate';

export const postRegisterAction = data => async dispatch => {
  try {
    const result = await axios.post(`${BASE_AUTH}/register`, data);

    if (result.status === 200 || result.status === 201) {
      dispatch(setRegister(result.data.results));
      console.log(result);
      navigate('Successful');
    }
  } catch (error) {
    console.log(error);
  }
};

setRegister = payload => {
  return {
    type: 'SET_POST_REGISTER',
    userDataRegister: payload,
  };
};
