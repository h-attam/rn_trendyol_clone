import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

type Props = {
  product: any;
  onPress: () => void;
};

const ProductItem: React.FC<Props> = ({product, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text numberOfLines={2} style={styles.title}>
        {product.title}
      </Text>
      <Text style={styles.price}>{product.price} ₺</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 5,
    fontSize: 14,
  },
  price: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#f27a1a',
  },
});

export default ProductItem;
