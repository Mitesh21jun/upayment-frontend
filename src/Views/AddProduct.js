import React, { useState, useEffect } from "react";
import { add_product } from "../service/service";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [developerMail, setDeveloperMail] = useState("");

  const submitAddProduct = async () => {
    if (
      !(name && price && category && description && imageLink && developerMail)
    )
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    let doc = {
      name: name,
      price: price,
      category: category,
      description: description,
      avatar: imageLink,
      developerEmail: developerMail,
    };
try {
    const response = await add_product(doc);
    console.log(response);
     toast.success("Product added successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
     });
    
     
   
           navigate(`/`);
   
} catch (error) {
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

  return (
    <div>
      <ToastContainer />
      <form class="w-full max-w-lg mx-auto mt-12">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Name
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="Text"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Price
            </label>
            <input
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="number"
              placeholder="Price"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Category
            </label>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Category"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Description"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Product Image Link
            </label>
            <input
              value={imageLink}
              onChange={(e) => {
                setImageLink(e.target.value);
              }}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="url"
              placeholder="Category"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Developer Email
            </label>
            <input
              value={developerMail}
              onChange={(e) => {
                setDeveloperMail(e.target.value);
              }}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              placeholder="Developer Email"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <button onClick={submitAddProduct}
              class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
