import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Filter = ({
  setFilter,
  setSportFilter,
  setSizeFilter,
  setPriceRangeFilter,
  categoryFilter,
  sportFilter,
  sizeFilter,
  priceRangeFilter,
}) => {
  const categories = ["Todos", "Camiseta", "Regata", "Calção", "Acessório"];
  const sports = ["Todos", "Futebol", "Basquete", "Corrida"];
  const sizes = ["Todos", "P", "M", "G", "GG"];
  const priceRanges = [
    "Todos",
    "0-100",
    "100-200",
    "200-300",
    "300-400",
    "400-500",
    "500+",
  ];

  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterTitle}>Categoria</Text>
      <View style={styles.filterRow}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setFilter(category)}
            style={[
              styles.filterButton,
              categoryFilter === category && styles.activeFilterButton,
            ]}
          >
            <Text style={styles.filterText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.filterTitle}>Esporte</Text>
      <View style={styles.filterRow}>
        {sports.map((sport) => (
          <TouchableOpacity
            key={sport}
            onPress={() => setSportFilter(sport)}
            style={[
              styles.filterButton,
              sportFilter === sport && styles.activeFilterButton,
            ]}
          >
            <Text style={styles.filterText}>{sport}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.filterTitle}>Tamanho</Text>
      <View style={styles.filterRow}>
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            onPress={() => setSizeFilter(size)}
            style={[
              styles.filterButton,
              sizeFilter === size && styles.activeFilterButton,
            ]}
          >
            <Text style={styles.filterText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.filterTitle}>Faixa de Preço</Text>
      <View style={styles.filterRow}>
        {priceRanges.map((range) => (
          <TouchableOpacity
            key={range}
            onPress={() => setPriceRangeFilter(range)}
            style={[
              styles.filterButton,
              priceRangeFilter === range && styles.activeFilterButton,
            ]}
          >
            <Text style={styles.filterText}>{range}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    padding: 16,
    backgroundColor: "#fff",
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    color: "#000",
  },
  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  filterButton: {
    padding: 8,
    margin: 4,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  activeFilterButton: {
    backgroundColor: "#ccc",
  },
  filterText: {
    fontSize: 14,
    color: "#000",
  },
});

export default Filter;
