import React from 'react';
import { Image, StyleSheet } from 'react-native';

export function Logo() {
  return (
    <Image style={styles.image} source={require('../assets/bh_logo.png')} />
  );
}

const styles = StyleSheet.create({
  image:{
    width: 128,
    height: 128,
    borderRadius: 65
  },
})