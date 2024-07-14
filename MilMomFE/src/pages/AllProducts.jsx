import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductContainer from "../components/ProductContainer";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import milmom from "../assets/milmom.png";
import Slider from "react-slick";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
export default function AllProducts() {
  const baseUrl = "https://localhost:7101/api";
  //
  const navigate = useNavigate();  
  const [categories, setCategories] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name"); // [name, price_asc, price_desc]
  const [selectedCategory, setSelectedCategory] = useState("");
  const [pageIndex, setPageIndex] = useState(1); 
  const [pageSize, setPageSize] = useState(16);
  //
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //
  //for categories
   useEffect(() => {
    
    fetch(`${baseUrl}/category/GetAllCategory`)
      .then((response) => response.json())
      .then((data) => setCategories(data.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  //for products
  // useEffect(() => {   
  //   const pageIndex = 1;
  //   fetch(
  //     `${baseUrl}/Product/base/getProducts?pageSize=${pageSize}&pageIndex=${pageIndex}&sortBy=name`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data.data))
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);
  // 
  // get product apply search, filter, sort
  const fetchProducts = async (sortBy, pageIndex, search, selectedCategory) => {
    const apiUrl = `${baseUrl}/Product/base/getProducts`;
    const apiParams = `${apiUrl}?pageSize=${pageSize}&pageIndex=${pageIndex}&sortBy=${sortBy}&search=${search}&category=${selectedCategory}`;
    fetch(apiParams).then((response) => response.json())
    .then((data) => setProducts(data.data))
    .catch((error) => console.error("Error fetching products:", error));
    setActiveButton(sortBy);
  };
  //
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get('categoryID');
    const se = params.get('search');
    setSearch(se);
    console.log('categoryId:', categoryId);
    if (categoryId) {
      setSelectedCategory(categoryId);
      fetchProducts(sortBy, pageIndex, search, categoryId);
    } else if(se){
      fetchProducts(sortBy, pageIndex, se, selectedCategory);
    }
     else{
      fetchProducts(sortBy, pageIndex, search, selectedCategory);
    }
    
  }, [pageIndex]);
  //
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchProducts(sortBy, pageIndex, search, selectedCategory);
  };
  //
  const handleLoadMore = () => {
    setPageSize(pageSize + 8);
      fetchProducts(sortBy, pageIndex, search, selectedCategory); 
    };
  //
  return (
    <div
      className="py-10 px-10"
      style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      {/* search bar */}
      <div className="grid grid-cols-4 gap-4">
        <div className="...">
          <div
            onClick={() => navigate("/")}
            className=" flex items-center px-5"
          >
            <img
              src={milmom}
              style={{ width: "80%", marginLeft: "90px", marginBottom: "25px" }}
            />
          </div>
        </div>
        <div className="col-span-3 ...">
          <form onSubmit={handleSearchSubmit} className="mb-8 max-w-3xl ">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white bg-pink-500"
            >
              Tìm kiếm
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              
              <input
                type="search"
                id="default-search"
                className="border-pink-500 rounded-xl block w-full p-4 ps-10 text-sm text-gray-900 border"
                placeholder="Ba mẹ tìm gì hôm nay...."
                
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                //onClick={() => fetchProducts(sortBy, pageIndex,search, selectedCategory)}
              >
                Tìm kiếm
              </button>
             
            </div>
          </form>
        </div>
      </div>
      <div class="flex">
        <div class="w-full">
          <div class="rounded-lg text-white">
            <Slider style={{ marginLeft: "20px", width: "100%" }} {...settings}>
              <div className="">
                <img
                  style={{ borderRadius: "20px" }}
                  src={
                    "https://res.cloudinary.com/dgnmitdno/image/upload/v1720168549/banner_jaraba.png"
                  }
                />
              </div>
              <div>
                <img
                  src={
                    "https://res.cloudinary.com/dgnmitdno/image/upload/v1720168770/banner1_diigip.png"
                  }
                />
              </div>
              <div>
                <img
                  src={
                    "https://res.cloudinary.com/dr2hpvick/image/upload/v1720169282/6_n%C3%A8_q40lco.png"
                  }
                />
              </div>
            </Slider>

            <div className="flex space-x-4 mt-10 mb-10 ml-5" style={{marginLeft:"24%"}}>
              <Menu as="div" className="relative inline-block text-center">
                <div>
                  <MenuButton                
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 space-x-2">
                    Loại sản phẩm
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {categories.map((category) => (
                    <div className="py-1">
                      <MenuItem>
                        <button                          
                          onClick={(e) => {
                            e.preventDefault(); 
                            setSelectedCategory(category.categoryID);
                            fetchProducts(sortBy, pageIndex, search, category.categoryID);
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-pink-100 data-[focus]:text-pink-900"
                        >
                          {category.name}
                          </button>
                      </MenuItem>
                    </div>
                  ))}
                </MenuItems>
              </Menu>
              <button className={`hover:bg-pink-500 hover:text-white bg-gray-200 text-gray-800 py-2 px-4 rounded ${activeButton === 'name' ? 'bg-pink-500 text-white' : 'hover:bg-pink-500 hover:text-white'}`}
               onClick={() => fetchProducts('name',pageIndex,search, selectedCategory)}>
                Phù Hợp
              </button>
              <button className={`hover:bg-pink-500 hover:text-white bg-gray-200 text-gray-800 py-2 px-4 rounded ${activeButton === 'price_asc' ? 'bg-pink-500 text-white' : 'hover:bg-pink-500 hover:text-white'} `}
              onClick={() => fetchProducts('price_asc',pageIndex, search, selectedCategory)}>
                Giá Thấp - Cao
              </button>
              <button className={`hover:bg-pink-500 hover:text-white bg-gray-200 text-gray-800 py-2 px-4 rounded ${activeButton === 'price_desc' ? 'bg-pink-500 text-white' : 'hover:bg-pink-500 hover:text-white'} `}
              onClick={() => fetchProducts('price_desc',pageIndex, search, selectedCategory)}>
                Giá Cao - Thấp
              </button>
              <div className="flex items-center justify-end space-x-1">
                <span className="text-pink-500">Trang {pageIndex}</span>
                <button className=" hover:bg-pink-500 bg-gray-200 text-gray-800 py-2 px-4 rounded"
                  onClick={() => setPageIndex(pageIndex - 1)}
                  disabled={pageIndex <= 1}
                >
                  ❮
                </button>
                <button className=" hover:bg-pink-500 bg-gray-200 text-gray-800 py-2 px-4 rounded"
                  onClick={() => setPageIndex(pageIndex + 1)}
                >
                  ❯
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {products.map((pro, index) => (
          <div
            onClick={() => navigate(`/productDetail/${pro.productId}`)}
            key={index}
            className="w-1/4 px-5 mb-10"
          >
            <ProductContainer product={pro} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button 
        onClick={handleLoadMore}
        className="w-80 px-6 py-2 text-pink-500 border border-pink-500 rounded-full hover:bg-pink-100 focus:outline-none">
          <p 
          className="text-lg font-medium">
            Xem Thêm
            </p>
        </button>
      </div>
    </div>
  );
}
