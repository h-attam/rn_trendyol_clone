import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../store/store';
import {getProducts} from '../store/slices/productsSlice';
import Banner from '../components/Banner';
import CategoryItem from '../components/CategoryItem';
import ProductItem from '../components/ProductItem';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const {products, loading} = useSelector((state: RootState) => state.products);
  const {categories} = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Banner />
            <FlatList
              data={categories}
              horizontal
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <CategoryItem title={item.title} />}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesList}
            />
            <Text style={styles.sectionTitle}>Öne Çıkan Ürünler</Text>
          </>
        }
        data={products}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ProductItem
            product={item}
            onPress={() =>
              navigation.navigate('ProductDetail', {product: item})
            }
          />
        )}
        contentContainerStyle={styles.productsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fafafa'},
  categoriesList: {paddingHorizontal: 10, marginVertical: 10},
  productsList: {paddingHorizontal: 10},
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default HomeScreen;
