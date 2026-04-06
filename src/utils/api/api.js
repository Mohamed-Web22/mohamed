import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Get all products
export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products: ' + error.message);
  }
};

// Get single product by ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch product: ' + error.message);
  }
};

// Get all categories
export const getCategories = async () => {
  try {
    const response = await api.get('/products/categories');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch categories: ' + error.message);
  }
};

// Get products by category
export const getProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products by category: ' + error.message);
  }
};

// Cart APIs removed — deprecated. Original implementations moved to `src/utils/api/deprecated/carts.js` if needed.
