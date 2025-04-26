import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Banner = () => {
  return (
    <Image
      source={require('../assets/img.jpg')}
      style={styles.banner}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default Banner;
