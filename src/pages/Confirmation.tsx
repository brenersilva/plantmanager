import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🥳</Text>

        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <View style={styles.footer}>
          <Button title="Começar" />
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
