import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const productsData = [
  { id: '1', name: 'Pasta de amendoin', category: 'Comida', price: 70, stock: 4  },
  { id: '2', name: 'Whey', category: 'Suplemento', price: 170, stock: 6 },
  { id: '3', name: 'Creatina', category: 'Estimulante', price: 110, stock: 9 },
];

const ProductList = () => {
  const [nameFilter, setNameFilter] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(nameFilter.toLowerCase()) && product.stock > 0
  );

  const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
      <Text>{item.name} - R$ {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Filtrar por nome"
        value={nameFilter}
        onChangeText={setNameFilter}
        style={styles.input}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default ProductList;



