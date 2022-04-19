import {combineReducers} from 'redux';
import HomeReducer from '../../screens/Home/redux/reducer';
import LoginReducer from '../../screens/Login/redux/reducer';
import RegisterReducer from '../../screens/Register/redux/reducer';
import Global from './globalReducer';

export const allReducers = combineReducers({
  home: HomeReducer,
  login: LoginReducer,
  register: RegisterReducer,
  Global,
});
