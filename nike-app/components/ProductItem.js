import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProductItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.productItem}>
      <Image
        source={{ uri: item.image_url }}
        style={styles.productImage}
        resizeMode="contain"
      />

      <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
        {item.name}
      </Text>

      <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productItem: {
    width: 180,
    margin: 5,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 160,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
    textAlign: "center",
  },
});

export default ProductItem;
