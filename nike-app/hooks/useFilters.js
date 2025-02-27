import { useState } from "react";

const useFilters = () => {
  const [categoryFilter, setCategoryFilter] = useState("Todos");
  const [sportFilter, setSportFilter] = useState("Todos");
  const [sizeFilter, setSizeFilter] = useState("Todos");
  const [priceRangeFilter, setPriceRangeFilter] = useState("Todos");

  const applyFilters = (data) => {
    return data.filter((item) => {
      const matchesCategory =
        categoryFilter === "Todos" || item.type === categoryFilter;
      const matchesSport =
        sportFilter === "Todos" || item.sport === sportFilter;
      const matchesSize =
        sizeFilter === "Todos" || item.available_sizes.includes(sizeFilter);
      const matchesPriceRange =
        priceRangeFilter === "Todos" ||
        (priceRangeFilter === "0-100" && item.price <= 100) ||
        (priceRangeFilter === "100-200" &&
          item.price > 100 &&
          item.price <= 200) ||
        (priceRangeFilter === "200-300" &&
          item.price > 200 &&
          item.price <= 300) ||
        (priceRangeFilter === "300-400" &&
          item.price > 300 &&
          item.price <= 400) ||
        (priceRangeFilter === "400-500" &&
          item.price > 400 &&
          item.price <= 500) ||
        (priceRangeFilter === "500+" && item.price > 500);

      return (
        matchesCategory && matchesSport && matchesSize && matchesPriceRange
      );
    });
  };

  const resetFilters = () => {
    setCategoryFilter("Todos");
    setSportFilter("Todos");
    setSizeFilter("Todos");
    setPriceRangeFilter("Todos");
  };

  return {
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
  };
};

export default useFilters;
