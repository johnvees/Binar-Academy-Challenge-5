import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {useSelector} from 'react-redux';

import {colors, fonts} from '../../utils';
import Gap from '../Gap';

const detailOverview = () => {
  const {bookDetail = []} = useSelector(state => state.home);

  return (
    <View>
      <Text style={styles.title}>Overview</Text>
      <Gap height={ms(8)} />
      <Text style={styles.overview}>{bookDetail.synopsis}</Text>
    </View>
  );
};

export default detailOverview;

const styles = StyleSheet.create({
  title: {
    fontSize: ms(20),
    fontFamily: fonts.secondary[600],
    color: colors.text.primary,
  },
  overview: {
    fontSize: ms(14),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
