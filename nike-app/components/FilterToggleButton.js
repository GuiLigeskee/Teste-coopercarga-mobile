import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FilterToggleButton = ({ isFilterVisible, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.filterToggleButton}>
      <Text style={styles.filterToggleButtonText}>
        {isFilterVisible ? "Fechar Filtros" : "Abrir Filtros"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterToggleButton: {
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  filterToggleButtonText: {
    color: "#fafafa",
    fontSize: 16,
  },
});

export default FilterToggleButton;
