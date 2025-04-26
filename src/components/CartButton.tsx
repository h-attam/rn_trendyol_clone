import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const CartButton = () => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={{marginRight: 15}}
      onPress={() => navigation.navigate('Cart')}>
      <Ionicons name="cart" size={24} color="#000" />
    </TouchableOpacity>
  );
};

export default CartButton;
