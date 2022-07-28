import React, { useState, useEffect } from "react";
import { delete_product_by_id, get_all_products } from "../service/service";
import { ToastContainer, toast } from "react-toastify";

const DeleteProduct = () => {
  const [allProducts, setAllProducts] = useState(null);

    const submitDelete =async(id) => {
    try {
        const response = await delete_product_by_id({id:id})
        console.log(response)
        return toast.success("Deleted successfully", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
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
    }
    
    
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

  useEffect(() => {
    getAllProducts().then((data) => {
      setAllProducts(data);
    });
  }, []);

  return (
    <div>
      <ToastContainer />
      {/* <h3>Select a product</h3> */}

      {allProducts &&
        allProducts.map((data) => (
          <div className="h-48 w-auto m-5 rounded overflow-hidden shadow-lg bg-white flex">
            <img
              className=" h-auto w-48 p-4"
              src={data.avatar}
              alt={data.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.name}</div>
              <p className="font-bold">${data.price}</p>
              <p className="text-gray-700 text-base">{data.category}</p>
              {/* <p className="text-gray-700 text-base">{data.description}
             </p> */}
                    <button onClick={() => {

                        if(window.confirm('Delete the product?')===(false)) return
                        submitDelete(data.id).then(() => {
                            setTimeout(() => {
                                window.location.reload()
                            }, 700)
                        })
                    }} class="mt-3 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Delete
              </button>
        
                </div>
                
          </div>
        ))}
    </div>
  );
};

export default DeleteProduct;
