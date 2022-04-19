import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {ms} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import Share from 'react-native-share';

import {colors, fonts} from '../../utils';
import {Gap} from '../../components';
import Button from '../Button';

const Header = ({type, title, onPress}) => {
  const navigation = useNavigation();

  const customShare = async () => {
    const shareOptions = {
      message: 'This is a test share massage',
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log(error);
    }
  };

  if (type === 'home') {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.homeTitle}>{title}</Text>
          <Text style={styles.homeDesc}>Search based on your needs</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', paddingStart: ms(32)}}>
          <Button type={'fullButton'} title={'DONT PRESS!'} onPress={onPress} />
        </View>
      </View>
    );
  } else if (type === 'detail') {
    return (
      <View style={styles.detailContent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="chevron-left"
            size={ms(24)}
            color={colors.text.primary}
          />
        </TouchableOpacity>
        <Text style={styles.detailTitle}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={onPress}>
            <Feather name="heart" size={ms(24)} color={colors.text.primary} />
          </TouchableOpacity>
          <Gap width={ms(16)} />
          <TouchableOpacity onPress={customShare}>
            <Feather name="share-2" size={ms(24)} color={colors.text.primary} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Header;

const styles = StyleSheet.create({
  homeTitle: {
    fontSize: ms(24),
    fontFamily: fonts.secondary[700],
    color: colors.text.primary,
    marginBottom: ms(8),
  },
  homeDesc: {
    fontSize: ms(16),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  detailContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailTitle: {
    fontSize: ms(24),
    fontFamily: fonts.secondary[700],
    color: colors.text.primary,
    marginEnd: ms(-24 - 16),
  },
});
