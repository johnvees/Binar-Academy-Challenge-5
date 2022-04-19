import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {colors, fonts} from '../../utils';
import {ms} from 'react-native-size-matters';
import {Button, Gap} from '../../components';
import {ILLogo} from '../../assets';

const Successful = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Gap height={16} />
      <Text style={styles.title}>Registration Completed!</Text>
      <Gap height={24} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: ms(-24),
        }}>
        <Image source={ILLogo} style={styles.vector} />
        <Text style={styles.desc}>
          We sent email verification to your email
        </Text>
      </View>
      <Button
        onPress={() => navigation.replace('Login')}
        type={'fullButton'}
        title={'Back to Login'}
      />
    </SafeAreaView>
  );
};

export default Successful;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    padding: ms(24),
  },
  title: {
    fontSize: ms(24),
    fontFamily: fonts.secondary[700],
    color: colors.text.primary,
    textAlign: 'center',
  },
  vector: {
    width: ms(200),
    resizeMode: 'contain',
  },
  desc: {
    fontSize: ms(16),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
