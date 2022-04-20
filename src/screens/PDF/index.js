/* eslint-disable no-undef */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms} from 'react-native-size-matters';
import Pdf from 'react-native-pdf';
import * as OpenAnything from 'react-native-openanything';
import RNFetchBlob from 'rn-fetch-blob';

import {colors} from '../../utils';
import {Button, Gap} from '../../components';

class FetchBlob extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loading: false,
  //   };
  // }

  _download() {
    const {
      dirs: {DownloadDir, DocumentDir},
    } = RNFetchBlob.fs;
    const {config} = RNFetchBlob;
    const isIOS = Platform.OS === 'ios';
    const aPath = Platform.select({ios: DocumentDir, android: DownloadDir});
    var pdf_URL =
      'https://i.ytimg.com/vi/yLiePQRMFc8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCUYqrdcbTIDVNrJ7o9IH9Yt9pUnA';
    var ext = 'jpg';
    var file_ex = 'examplepdf.jpg';

    const fPath = `${aPath}/${file_ex}`;
    const configOptions = Platform.select({
      ios: {
        fileChace: true,
        path: fPath,
        appendExt: ext,

        android: {
          fileChace: false,
          appendExt: ext,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: aPath + '/' + file_ex,
            description: 'jpg',
          },
        },
      },
    });

    if (isIOS) {
      // this.setState({loading: true, progress: 0});
      RNFetchBlob.config(configOptions)
        .fetch('GET', pdf_URL)
        .then(res => {
          console.log('file', res);
          // this.setState({loading: false});
          RNFetchBlob.ios.previewDocument('file://' + res.path());
        });
      return;
    } else {
      // this.setState({loading: true});
      config(configOptions)
        .fetch('GET', pdf_URL)
        .progress((received, total) => {
          console.log('progress', received / total);
          // this.setState({progress: received / total});
        })

        .then(res => {
          console.log('file_download', res);
          // this.setState({loading: false, progress: 100});
          RNFetchBlob.android.actionViewIntent(res.path());
        })

        .catch(errorMessage => {
          // this.setState({loading: false});
          console.log('error with downloading file', errorMessage);
        });
    }
  }

  render() {
    // if (this.state.loading) {
    //   return (
    //     <View>
    //       <ActivityIndicator
    //         color="#FC943F"
    //         size="large"
    //         style={styles.activityIndicator}
    //       />
    //     </View>
    //   );
    // }

    return (
      <View>
        <Button
          type={'fullButton'}
          title={'Download PDF'}
          onPress={() => this._download()}
        />
      </View>
    );
  }
}

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

      <FetchBlob />

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
  activityIndicator: {
    height: ms(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    padding: ms(24),
  },
  pdf: {
    flex: 1,
  },
});
