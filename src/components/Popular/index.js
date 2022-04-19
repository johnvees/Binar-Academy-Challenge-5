import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {ms} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import Gap from '../Gap';
import {colors, fonts, idrCurrency} from '../../utils';
import {
  getDetailBookById,
  getRecommendedBookData,
} from '../../screens/Home/redux/action';

const Popular = () => {
  const dispatch = useDispatch();

  const {recommendedBook = []} = useSelector(state => state.home);

  const getRecommendedBook = () => {
    dispatch(getRecommendedBookData());
  };

  const getBookDetails = item => {
    dispatch(getDetailBookById(item.id));
  };

  useEffect(() => {
    getRecommendedBook();
  }, []);

  const recommendedBookCard = ({item}) => {
    return (
      <View style={{marginEnd: ms(10), marginBottom: ms(16)}}>
        <TouchableOpacity onPress={() => getBookDetails(item)}>
          <Image
            source={{uri: `${item.cover_image}`}}
            style={styles.bookCover}
          />
          <Gap height={ms(8)} />
          <View style={{maxWidth: styles.bookCover.width}}>
            <Text
              style={styles.bookTitle}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {item.title}
            </Text>
            <Gap height={ms(2)} />
            <Text style={styles.bookAuthor}>{item.author}</Text>
            <Text style={styles.bookPublisher}>{item.publisher}</Text>
            <Gap height={ms(2)} />
            <View>
              <Text style={styles.bookPrice}>
                {idrCurrency.format(`${item.price}`)}
              </Text>
              <Gap height={ms(2)} />
              <Text style={styles.bookRating}>
                {item.average_rating} / 10{' '}
                <FontAwesome name="star" size={ms(14)} color="gold" />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.titleContent}>Recommended e-Book</Text>
      <Gap height={ms(16)} />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={recommendedBook
          .sort((a, b) => {
            return b.average_rating - a.average_rating;
          })
          .slice(0, 6)}
        keyExtractor={item => item.id}
        renderItem={recommendedBookCard}
      />
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  titleContent: {
    fontSize: ms(20),
    fontFamily: fonts.secondary[600],
    color: colors.text.primary,
  },
  bookCover: {
    width: ms(100),
    height: ms(140),
    borderRadius: ms(8),
    resizeMode: 'stretch',
  },
  bookTitle: {
    fontSize: ms(16),
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  bookAuthor: {
    fontSize: ms(12),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  bookPublisher: {
    fontSize: ms(12),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  bookPrice: {
    fontSize: ms(12),
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  bookRating: {
    fontSize: ms(12),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
