import { PRODUCTS } from "./data/products.js";

const getFilteredProducts = (
  products,
  minPrice = 0,
  maxPrice,
  categoryFilter,
  sortBy = "price"
) => {
  const filteredProducts = products.filter((product) => {
    // Calculate discounted price
    const discountedPrice = product.price * (1 - product.discount / 100);
    if (product.price < minPrice || product.price > maxPrice) return false;

    // Apply category filter
    if (categoryFilter && (!product.category || product.category !== categoryFilter)) return false;

    // Update final price
    product.price = discountedPrice;
  });

  // Sort products
  if (sortBy === "name")
    return filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

  return filteredProducts.sort((a, b) => a.price - b.price);
};

// console.log(getFilteredProducts(PRODUCTS, 0, 1000, "Electronics", "price"));
// console.log(getFilteredProducts(PRODUCTS, 0, 1000, "", "price"));
console.log(getFilteredProducts(PRODUCTS, 500, 1000, "", "name"));
