import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

type Props = {
  title: string;
};

const CategoryItem: React.FC<Props> = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default CategoryItem;
