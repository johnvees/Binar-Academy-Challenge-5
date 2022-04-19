import {StyleSheet, RefreshControl} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';
import {Notification} from '../../components';

import {colors} from '../../utils';
import {Gap, Header, Popular, Skeleton} from '../../components';
import {DetailHeader, DetailOverview} from '../../components/DetailComp';
import {ScrollView} from 'react-native-gesture-handler';
import {setRefreshing} from '../../utils/store/globalAction';
import {useDispatch, useSelector} from 'react-redux';
import {getRecommendedBookData} from '../Home/redux/action';

const Detail = ({skel}) => {
  const dispatch = useDispatch();
  const {loading, refreshing} = useSelector(state => state.Global);

  const getBookData = () => {
    dispatch(getRecommendedBookData());
  };
  const onRefresh = () => {
    setRefreshing(true);
    getBookData();
    setRefreshing(false);
  };

  // if (loading) {
  //   return (
  //     <View>
  //       <Skeleton skel={'detail'} />
  //     </View>
  //   );
  // }

  const testPushNotification = () => {
    Notification.configure();
    Notification.buatChannel("1");
    Notification.kirimNotification("1", "Judul", "Isi");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Header
          type={'detail'}
          title={'Book Detail'}
          onPress={testPushNotification}
        />
        <Gap height={ms(24)} />
        <DetailHeader />
        <Gap height={ms(24)} />
        <DetailOverview />
        <Gap height={ms(24)} />
        <Popular />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    padding: ms(24),
  },
});
