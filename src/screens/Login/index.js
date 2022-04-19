import {StyleSheet, Text, View, Image, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {colors, fonts} from '../../utils';
import {ILLogo} from '../../assets';
import {Button, Gap} from '../../components';
import {ms} from 'react-native-size-matters';
import {postLoginAction} from './redux/action';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {tokenValue} = useSelector(state => state.login);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postLogin = () => {
    if (email.length === 0 && password.length === 0) {
      Alert.alert('Error', 'Form is empty');
    } else if (email.length === 0) {
      Alert.alert('Error', 'Email is empty');
    } else if (password.length === 0) {
      Alert.alert('Error', 'Password is empty');
    } else {
      const body = {
        email: email,
        password: password,
      };
      dispatch(postLoginAction(body, tokenValue));
    }
  };

  useEffect(() => {
    if (tokenValue) {
      navigation.navigate('Home');
    }
  }, [tokenValue]);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={ILLogo} style={styles.logo} />
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.titleDesc}>You've Been Missed:(</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor={colors.text.primary}
        selectionColor={colors.button.background}
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor={colors.text.primary}
        selectionColor={colors.button.background}
        secureTextEntry={true}
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <Gap height={16} />
      <Button type={'fullButton'} title={'Login'} onPress={postLogin} />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Button
          onPress={() => navigation.navigate('Register')}
          type={'textOnly'}
          secondaryTitle={`Don't Have an Account Yet?`}
          primaryTitle={' Register Here'}
        />
      </View>
      <Gap height={16} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    padding: ms(24),
  },
  logo: {
    marginTop: ms(16),
    marginBottom: ms(32),
    height: ms(80),
    resizeMode: 'contain',
  },
  title: {
    fontSize: ms(24),
    fontFamily: fonts.secondary[700],
    color: colors.text.primary,
    marginBottom: ms(8),
  },
  titleDesc: {
    fontSize: ms(20),
    fontFamily: fonts.secondary[600],
    color: colors.text.primary,
    marginBottom: ms(24),
  },
  textInput: {
    borderRadius: ms(8),
    backgroundColor: colors.white,
    height: ms(50),
    paddingStart: ms(16),
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    fontSize: ms(14),
    marginBottom: ms(16),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
