import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from '../../components';
import {navigate} from '../../utils/helpers/navigate';
import {setToken} from '../Login/redux/action';
import {useDispatch} from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setToken(''));
    navigate('Login');
  };
  return (
    <View>
      <Button type={'fullButton'} title={'Logout'} onPress={logout()} />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({});
