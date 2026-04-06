// Search products by title (case-insensitive)
export const searchProducts = (products, searchTerm) => {
  if (!searchTerm.trim()) return products;
  
  return products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Sort products based on criteria
export const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];

  switch (sortBy) {
    case 'price-low-high':
      return sortedProducts.sort((a, b) => a.price - b.price);
    
    case 'price-high-low':
      return sortedProducts.sort((a, b) => b.price - a.price);
    
    case 'name-a-z':
      return sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    
    default:
      return sortedProducts;
  }
};

// Format price to currency
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

// Truncate text to specified length
export const truncateText = (text, maxLength = 50) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Validate product ID
export const isValidProductId = (id) => {
  const numId = parseInt(id);
  return !isNaN(numId) && numId > 0;
  
}; 