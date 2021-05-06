import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'party' | 'huge';
  nextScreen: string;
}

const emojis = {
  party: '🥳',
  huge: '🤗',
}

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.footer}>
          <Button
            title={buttonTitle}
            onPress={handleMoveOn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  emoji: {
    fontSize: 54,
    textAlign: 'center',
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 48,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.heading,
    fontFamily: fonts.complement,
    marginTop: 16,
  },

  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 32,
  },
});
