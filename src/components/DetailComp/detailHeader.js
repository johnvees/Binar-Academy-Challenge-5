import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {ms} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Button, Gap} from '../../components';
import {colors, fonts, idrCurrency} from '../../utils';

const detailHeader = () => {

  const {bookDetail = []} = useSelector(state => state.home);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: `${bookDetail.cover_image}`}}
        style={styles.bookCover}
      />
      <Gap width={ms(16)} />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingVertical: ms(16),
          height: styles.bookCover.height,
        }}>
        <View>
          <Text style={styles.bookTitle}>{bookDetail.title}</Text>
          <Gap height={ms(16)} />
          <Text style={styles.bookInfo}>
            Author By : <Text style={styles.bookDesc}>{bookDetail.author}</Text>
          </Text>
          <Gap height={ms(8)} />
          <Text style={styles.bookInfo}>
            Publisher By :{' '}
            <Text style={styles.bookDesc}>{bookDetail.publisher}</Text>
          </Text>
          <Gap height={ms(16)} />
          <Text style={styles.bookInfo}>
            Users Rating :{' '}
            <Text style={styles.bookDesc}>
              {bookDetail.average_rating} / 10{' '}
              <FontAwesome name="star" size={ms(14)} color="gold" />
            </Text>
          </Text>
          <Gap height={ms(8)} />
          <Text style={styles.bookInfo}>
            Total Sales :{' '}
            <Text style={styles.bookDesc}>{bookDetail.total_sale}</Text>
          </Text>
        </View>

        <Button
          type={'fullButton'}
          title={idrCurrency.format(`${bookDetail.price}`)}
        />
      </View>
    </View>
  );
};

export default detailHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  bookCover: {
    width: ms(170),
    height: ms(250),
    borderRadius: ms(10),
    resizeMode: 'stretch',
  },
  bookTitle: {
    fontSize: ms(16),
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  bookInfo: {
    fontSize: ms(14),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  bookDesc: {
    fontSize: ms(14),
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
});
