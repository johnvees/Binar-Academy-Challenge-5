import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SoundPlayer from 'react-native-sound-player';
import Button from '../Button';
import {ms} from 'react-native-size-matters';
import {colors, fonts} from '../../utils';
import Gap from '../Gap';

const detailSoundPlayer = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
  const [status, setStatus] = useState('play');

  const play = () => {
    SoundPlayer.playSoundFile('test_audio', 'mp3');
    setStatus('pause');
  };

  const stop = () => {
    SoundPlayer.stop();
    setStatus('play');
  };

  const pause = () => {
    SoundPlayer.pause();
    setStatus('resume');
  };

  const resume = () => {
    SoundPlayer.resume();
    setStatus('pause');
  };

  return (
    <View>
      <Text style={styles.title}>Sample Audiobook</Text>
      <Gap height={ms(8)} />
      <Text style={styles.overview}>You can hear sample audiobook below</Text>
      <Gap height={ms(8)} />
      <View style={styles.content}>
        <Button type={'fullButton'} title={'Play'} onPress={play} />
        <Button type={'fullButton'} title={'Stop'} onPress={stop} />
        <Button type={'fullButton'} title={'Pause'} onPress={pause} />
        <Button type={'fullButton'} title={'Resume'} onPress={resume} />
      </View>
    </View>
  );
};

export default detailSoundPlayer;

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
  content: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
