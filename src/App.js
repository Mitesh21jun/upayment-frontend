// import logo from './logo.svg';
import { Route, Routes} from "react-router-dom";
import "./App.css";
import HomePage from "./Views/HomePage"
import ProductPage from "./Views/ProductPage"
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./Views/AddProduct"
import DeleteProduct from "./Views/DeleteProduct"

function App() {
  return (
    <div className="container-fluid p-0 bg-stone-100">
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
  <div class="mb-2 sm:mb-0">
    <a href="/" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">UPayments Store</a>
        </div>
        
        <div class="p-0">

          

  <div class="dropdown inline-block relative">
    <button class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
      <span class="mr-1">Manage Products</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li class=""><a class="rounded-t bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="/add_product">Add Product</a></li>
      <li class=""><a class="bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="/delete_product">Delete Product</a></li>
  
    </ul>
  </div>

</div>

  {/* <div class="dropdown relative inline-block text-left">
  <div>
    <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Manage
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>


  <div class="dropdown-menu hidden hover:block origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Add Product</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Delete a product</a>
    
    </div>
  </div>
</div> */}
</nav>
        <Routes>
          <Route path={"/"} exact element={<HomePage />} />
          <Route path={"/product/:id"} exact element={<ProductPage />} />
          <Route path={"/add_product"} exact element={<AddProduct />} />
          <Route path={"/delete_product"} exact element={<DeleteProduct />} />
        </Routes>
    </div>
  );
}

export default App;