import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const ProductDetailScreen = ({route}: any) => {
  const {product} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price} ₺</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20},
  image: {width: '100%', height: 300, resizeMode: 'contain'},
  title: {fontSize: 20, fontWeight: 'bold', marginTop: 10},
  price: {fontSize: 18, color: '#f27a1a', marginVertical: 10},
  description: {fontSize: 16, color: '#555'},
});

export default ProductDetailScreen;
