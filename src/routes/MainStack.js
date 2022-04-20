import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {
  Detail,
  Home,
  Login,
  Logout,
  PDF,
  Register,
  Successful,
} from '../screens';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Login'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Logout" component={Logout} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Successful" component={Successful} />
      <Stack.Screen name="PDF" component={PDF} />
    </Stack.Navigator>
  );
}
