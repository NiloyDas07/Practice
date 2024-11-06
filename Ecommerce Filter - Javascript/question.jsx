<>
  You are tasked with handling a list of products for an e-commerce website.
  Each product has the following properties:
  {{
    id: "Unique identifier for the product (number)",
    name: "Name of the product (string)",
    price: "Price of the product (number)",
    category: "Category of the product (string)",
    discount:
      "Discount percentage applied to the product (optional, number between 0 and 100)",
  }}
  You need to implement a function getFilteredProducts that takes the following
  parameters:
  {{
    products: "Array of product objects",
    minPrice: "The minimum price to filter the products (number)",
    maxPrice: "The maximum price to filter the products (number)",
    categoryFilter:
      "An optional category filter (string). If provided, return products only from that category",
    sortBy:
      "Sorting criteria ('price' or 'name'). Products should be sorted in ascending order based on the criteria",
  }}
  {/* {The function should return an array of products that:

Fall between the minPrice and maxPrice.

Match the categoryFilter (if provided).

Are sorted by the sortBy parameter.

Note: The function should also apply the discount (if any) to the price before doing any filtering or sorting.*/}
  {
    //Function signature:
    function getFilteredProducts(
      products,
      minPrice,
      maxPrice,
      categoryFilter,
      sortBy
    ) {
      // Your code here
    }
  }
  {
    // Example Input:
    (products = [
      {
        id: 1,
        name: "Laptop",
        price: 1000,
        category: "Electronics",
        discount: 10,
      },
      { id: 2, name: "Shoes", price: 200, category: "Fashion", discount: 0 },
      {
        id: 3,
        name: "Smartphone",
        price: 800,
        category: "Electronics",
        discount: 5,
      },
      { id: 4, name: "T-shirt", price: 50, category: "Fashion" },
      {
        id: 5,
        name: "Fridge",
        price: 1200,
        category: "Appliances",
        discount: 20,
      },
    ])
  }
  {
    //Example Output:
    getFilteredProducts(products, 100, 1000, "Electronics", "price")
  }
  {[
    { id: 3, name: "Smartphone", price: 760, category: "Electronics" }, // 5% discount applied
    { id: 1, name: "Laptop", price: 900, category: "Electronics" }, // 10% discount applied
  ]}
</>;
