import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = ({ data, onProductPress }) => {
  if (data.length === 0) {
    return (
      <View style={styles.noResultsContainer}>
        <Text style={styles.noResultsText}>Nenhum produto encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.listContent}>
      <View style={styles.productGrid}>
        {data.map((item) => (
          <ProductItem key={item.name} item={item} onPress={onProductPress} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noResultsText: {
    fontSize: 18,
    color: "#888",
  },
});

export default ProductList;
