import axios from "axios";

let base_url = "https://upayments-studycase-api.herokuapp.com/api";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pdGVzaDIxanVuQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9taXRlc2gyMWp1biIsImlhdCI6MTY1OTMzODgyOSwiZXhwIjoxNjU5NzcwODI5fQ.qfZjLo8Azx07HkrILRlfDL9efRl1Xfs5XQmBU6PjDBg";
// Products
// GET https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/
// GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/{id}
// POST: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products
// DELETE: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/{id}

// Categories
// GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/
// GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/{id}

const get_all_products = async () => {
  let response = axios.get(`${base_url}/products`, {
    headers: { Authorization: token },
  });
  return response;
};
const get_all_categories = async () => {
  let response = axios.get(`${base_url}/categories`, {
    headers: { Authorization: token },
  });
  return response;
};
const get_category_by_id = async ({ id }) => {
  let response = axios.get(`${base_url}/categories/${id}`, {
    headers: { Authorization: token },
  });
  return response;
};
const add_product = async (data) => {
  let response = axios.post(`${base_url}/products`, data, {
    headers: { Authorization: token },
  });
  return response;
};

const get_product_by_id = async ({ id }) => {
  let response = axios.get(`${base_url}/products/${id}`, {
    headers: { Authorization: token },
  });
  return response;
};
const delete_product_by_id = async ({ id }) => {
  let response = axios.delete(`${base_url}/products/${id}`, {
    headers: { Authorization: token },
  });
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
