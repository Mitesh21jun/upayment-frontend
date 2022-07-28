import axios from "axios";

let base_url = "https://62286b649fd6174ca82321f1.mockapi.io/case-study";

// Products
// GET https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/
// GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/{id}
// POST: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products
// DELETE: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/{id}

// Categories
// GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/
// GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/{id}

const get_all_products = async () => {
  let response = axios.get(`${base_url}/products`);
  return response;
};
const get_all_categories = async () => {
  let response = axios.get(`${base_url}/categories`);
  return response;
};
const get_category_by_id = async ({ id }) => {
  let response = axios.get(`${base_url}/categories/${id}`);
  return response;
};
const add_product = async (data) => {
  let response = axios.post(`${base_url}/products`, data);
  return response;
};

const get_product_by_id = async ({ id }) => {
  let response = axios.get(`${base_url}/products/${id}`);
  return response;
};
const delete_product_by_id = async ({ id }) => {
  let response = axios.delete(`${base_url}/products/${id}`);
  return response;
};

export {
  get_all_products,
  get_product_by_id,
  delete_product_by_id,
  add_product,
  get_all_categories,
  get_category_by_id,
};
