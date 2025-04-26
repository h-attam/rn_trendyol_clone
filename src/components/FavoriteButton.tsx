import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const FavoriteButton = () => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={{marginRight: 15}}
      onPress={() => navigation.navigate('Favorites')}>
      <Ionicons name="heart" size={24} color="#f00" />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
