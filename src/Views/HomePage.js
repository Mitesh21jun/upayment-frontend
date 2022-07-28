import React, { useEffect, useState } from "react";
import { ProductCard } from "../Components/ProductCard";
import { get_all_categories, get_all_products } from "../service/service";
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  const [products, setProducts] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  const getAllProducts = async () => {
    try {
      const response = await get_all_products();
      console.log(response.data, "products");
      return response.data;
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

  const getAllCategories = async () => {
    try {
      const response = await get_all_categories();
      console.log(response.data, "categories");
      return response.data;
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
    getAllProducts().then((data) => {
      setAllProducts(data);
      setProducts(data);
    });
    getAllCategories().then((data) => {
      setAllCategories(data);
    });
  }, []);

  useEffect(() => {
    let tmp = allProducts;
    if (category) {
      tmp = tmp.filter((data) => data.category === category);
    }
    if (searchText) {
      tmp = tmp.filter((data) =>
        data.name.toLowerCase()?.includes(searchText.toLowerCase())
      );
    }

    setProducts(tmp)
  }, [category, searchText, allProducts]);

  return (
    <div className="container columns-auto mt-10">
      <ToastContainer />
      <div className="row-auto">
        <div className="flex justify-between pl-6">
          <div className="mb-3 xl:w-96">
            {/* <label
            for="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Example label
          </label> */}
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              className="
              appearance-none
              form-control
              
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlInput1"
              placeholder="Search"
            />
          </div>
          <div className="mb-3 xl:w-96">
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="form-select form-select-lg mb-3
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label=".form-select-lg example"
            >
              <option selected value="">
                Select Category
              </option>
              {allCategories &&
                allCategories.map((cat, index, array) => (
                  <option value={cat.name} key={cat.id}>
                    {cat.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
      <div className="row-auto">
        <div className="flex justify-start flex-wrap xl:p-14">
          {products &&
            products.map((data, index, array) => (
              <ProductCard data={data} key={data.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
