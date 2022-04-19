import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {ms} from 'react-native-size-matters';

const Button = ({onPress, type, title, secondaryTitle, primaryTitle}) => {
  if (type === 'fullButton') {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  } else if (type === 'textOnly') {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.secondaryText}>
          {secondaryTitle}
          <Text style={styles.primaryText}>{primaryTitle}</Text>
        </Text>
      </TouchableOpacity>
    );
  } else if (type === 'iconOnly') {
  }

  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button.background,
    borderRadius: ms(8),
    paddingVertical: ms(10),
  },
  buttonText: {
    fontSize: ms(16),
    fontFamily: fonts.secondary[700],
    color: colors.button.text,
    textAlign: 'center',
  },
  secondaryText: {
    fontSize: ms(16),
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    textAlign: 'center',
  },
  primaryText: {
    color: colors.button.background,
  },
});
