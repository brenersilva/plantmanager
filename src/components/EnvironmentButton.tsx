import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({
  title,
  active = false,
  ...rest
}: EnvironmentButtonProps) {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.title,
        active && styles.titleActive
      ]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 76,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
    borderRadius: 12,
    marginRight: 5,
  },

  containerActive: {
    backgroundColor: colors.green_light,
  },
  
  title: {
    color: colors.heading,
    fontFamily: fonts.text,
  },

  titleActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});
