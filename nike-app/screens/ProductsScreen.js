import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import data from "../data.json";
import Filter from "../components/Filter";
import ProductModal from "../components/ProductModal";
import ProductList from "../components/ProductList";
import FilterToggleButton from "../components/FilterToggleButton";
import useFilters from "../hooks/useFilters";

const ProductsScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const {
    categoryFilter,
    setCategoryFilter,
    sportFilter,
    setSportFilter,
    sizeFilter,
    setSizeFilter,
    priceRangeFilter,
    setPriceRangeFilter,
    applyFilters,
    resetFilters,
  } = useFilters();

  const filteredData = applyFilters(data);

  return (
    <View style={styles.container}>
      <FilterToggleButton
        isFilterVisible={isFilterVisible}
        onPress={() => setIsFilterVisible(!isFilterVisible)}
      />

      {isFilterVisible && (
        <View>
          <Filter
            setFilter={setCategoryFilter}
            setSportFilter={setSportFilter}
            setSizeFilter={setSizeFilter}
            setPriceRangeFilter={setPriceRangeFilter}
            categoryFilter={categoryFilter}
            sportFilter={sportFilter}
            sizeFilter={sizeFilter}
            priceRangeFilter={priceRangeFilter}
          />
          <TouchableOpacity
            onPress={resetFilters}
            style={styles.clearFiltersButton}
          >
            <Text style={styles.clearFiltersButtonText}>Limpar Filtros</Text>
          </TouchableOpacity>
        </View>
      )}

      <ProductList data={filteredData} onProductPress={setSelectedProduct} />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#fff",
  },
  clearFiltersButton: {
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  clearFiltersButtonText: {
    color: "#000",
    fontSize: 16,
  },
});

export default ProductsScreen;
