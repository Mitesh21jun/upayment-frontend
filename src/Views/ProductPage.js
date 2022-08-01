import React, { useState, useEffect } from "react";
import ProductDetails from "../Components/ProductDetails";
import { useLocation } from "react-router-dom";
import { get_product_by_id } from "../service/service";
import { ToastContainer, toast } from "react-toastify";

const ProductPage = () => {
  const { state } = useLocation();
  const { id } = state;
  console.log(id);
  const [product, setProduct] = useState(null);
  const getProductById = async (id) => {
    try {
      const response = await get_product_by_id({ id: id });
      console.log(response.data);
      return response.data.product;
    } catch (error) {
      console.log(error);
      return toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
    });
  }, []);

  return <div>
    <ToastContainer/>
    {product && <ProductDetails product={product} />}</div>
};

export default ProductPage;
