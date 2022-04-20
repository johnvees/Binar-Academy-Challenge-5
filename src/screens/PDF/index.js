import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';
import Pdf from 'react-native-pdf';
import * as OpenAnything from 'react-native-openanything';

import {colors} from '../../utils';
import {Button, Gap} from '../../components';

const PDF = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'View PDF'}
        type={'fullButton'}
        onPress={() =>
          OpenAnything.Pdf(
            'http://samples.leanpub.com/thereactnativebook-sample.pdf',
          )
        }
      />
      <Gap height={ms(24)} />

      <Pdf
        source={{
          uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
        }}
        style={styles.pdf}
      />
    </SafeAreaView>
  );
};

export default PDF;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    padding: ms(24),
  },
  pdf: {
    flex: 1,
  },
});
