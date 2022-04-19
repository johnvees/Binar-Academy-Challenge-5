import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import InternetConnectionAlert from 'react-native-internet-connection-alert';

import MainStack from './MainStack';
import {navigationRef} from '../utils/helpers/navigate';

const Root = () => {
  return (
    <InternetConnectionAlert
      onChange={connectionState => {
        console.log('Connection State: ', connectionState);
      }}
      title="Internet Connection Problem"
      message="Please check your network connection">
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </InternetConnectionAlert>
  );
};

export default Root;
