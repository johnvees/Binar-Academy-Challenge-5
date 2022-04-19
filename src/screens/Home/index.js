import {StyleSheet, View, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';

import {
  Gap,
  Header,
  Popular,
  Recommended,
  Search,
  Skeleton,
} from '../../components';
import {colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getRecommendedBookData} from './redux/action';
import {setRefreshing} from '../../utils/store/globalAction';
import {navigate} from '../../utils/helpers/navigate';

const Home = () => {
  const dispatch = useDispatch();
  const {tokenValue} = useSelector(state => state.login);
  const {refreshing} = useSelector(state => state.Global);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookData();
  }, [tokenValue]);

  const getBookData = () => {
    setLoading(false);

    dispatch(getRecommendedBookData());
  };

  const onRefresh = () => {
    setRefreshing(true);
    getBookData();
    setRefreshing(false);
  };

  if (loading) {
    return (
      <View>
        <Skeleton skel={'home'} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Header
          type={'home'}
          title={'Discover'}
          onPress={() => navigate('Logout')}
        />
        {/* <Gap height={ms(16)} /> */}
        {/* <Search /> */}
        <Gap height={ms(24)} />
        <Recommended />
        <Gap height={ms(24)} />
        <Popular />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    padding: ms(24),
  },
});
