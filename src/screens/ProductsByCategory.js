import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductByCategory from '../components/ProductByCategory';
import Search from '../components/Search';
import products from '../utils/data/products.json';

const ProductsByCategory = ({ navigation, route }) => {
  const { categorySelected } = route.params;
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handlerKeyword = (k) => {
    setKeyword(k);
  };

  useEffect(() => {
    if (categorySelected) {
      setProductsFiltered(products.filter(product => product.category === categorySelected));
    }
    if (keyword) {
      setProductsFiltered(productsFiltered.filter(product => {
        const productTitleLower = product.title.toLowerCase();
        const keywordLower = keyword.toLowerCase();
        return productTitleLower.includes(keywordLower);
      }));
    }
  }, [categorySelected, keyword]);

  return (
    <View style={styles.container}>
      <Search handlerKeyword={handlerKeyword} />
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductByCategory navigation={navigation} item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default ProductsByCategory;
