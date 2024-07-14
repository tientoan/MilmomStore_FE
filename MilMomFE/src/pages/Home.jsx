import React from "react";
import { useState, useEffect } from "react";
import { momMilTopics } from "../data/data";
import OtherProducts from "../components/OtherProducts";
import BannerMilMom from "../assets/bannerMilMom.png";
import milmom from "../assets/milmom.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { formatCurrency } from "../helpers/helper";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { homeBanner } from "../data/data";
import image from "../assets/suabot.jpg";

const apiRoot = import.meta.env.VITE_API_ROOT;
export default function Home() {
  //
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  //
  const handleSearch = () => {
    navigate(`/allProducts?search=${search}`);
  };
  //
  //for categories
  useEffect(() => {
    //fetch(`${apiRoot}category/GetAllCategory`)
    fetch("https://localhost:7101/api/category/GetAllCategory")
      .then((response) => response.json())
      .then((data) => setCategories(data.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  //
  //for products
  useEffect(() => {
    const pageSize = 3;
    const pageIndex = 1;
    fetch(
      `https://localhost:7101/api/Product/base/getProducts?pageSize=${pageSize}&pageIndex=${pageIndex}&sortBy=name`
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  //
  //filter by category
  // useEffect(() => {
  //   fetch(`https://localhost:7101/api/Product/base/getProducts?categoryId=1`)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data.data))
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);
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
          <form className="mb-8 max-w-3xl ">
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
                required
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSearch}
              >
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex">
        <div
          class="flex flex-col items-center justify-center w-1/4 mx-auto"
          style={{ backgroundColor: "#f5f7fd" }}
        >
          <ul class="text-left text-md font-medium text-gray-600 dark:text-white">
            {categories.map((category) => (
              <div className="flex justify-between items-center">
                <li key={category.id}>
                  <a href={`/allProducts?categoryID=${category.categoryID}`} className="block py-2">
                    {category.name}
                  </a>
                </li>
                <svg
                  className="h-4.5 w-4.5 text-gray-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            ))}
          </ul>
        </div>

        <div class="w-3/4">
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
          </div>
        </div>
      </div>

      <div className="my-10 flex">
        <div className="w-1/5 rounded-xl pr-10">
          <img
            className="rounded-xl"
            src={
              "https://res.cloudinary.com/dgnmitdno/image/upload/v1720170190/banner3_p8x1zx.jpg"
            }
          />
        </div>
        <div className="w-4/5 ">
          <div 
          className="text-2xl bg-red-50 text-pink-500 font-bold px-4 py-2 rounded-xl font-sans">
            Sản phẩm mới
          </div>
          <div className="bg-red-50 grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                onClick={() => navigate(`/productDetail/${product.productId}`)}
                key={product.productId}
              >
                <div
                  className="p-4 shadow-sm"
                  style={{
                    border: " 3px pink",
                    borderRadius: "30px",
                    width: "100%",
                  }}
                >
                  <div
                    key={product.id}
                    className="... shadow-sm flex items-center grid grid-flow-row auto-rows-max"
                  >
                    <img
                      src={product.imageProducts[0].image}
                      alt={product.name}
                      className="w-lg h-25 object-cover mb-4"
                      style={{ borderRadius: "30px", width: "90%" }}
                    />
                    <div
                      className="text-lg font-semibold mt-2"
                      style={{ height: "35px" }}
                    >
                      <h4 className="flex items-center text-sm">
                        {product.name.length > 30
                          ? `${product.name.slice(0, 30)}...`
                          : product.name}
                      </h4>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      {"★".repeat(Math.floor(product.averageRating))}
                      {"☆".repeat(5 - Math.floor(product.averageRating))}
                    </div>

                    <div className="text-lg text-red-300 flex justify-between">
                      <h3 className="text-xl bg-red-50 text-pink-500 font-bold   rounded-xl font-sans">
                        {formatCurrency(product.purchasePrice)}
                      </h3>

                      <Icon className="mr-10" icon="mdi:cart" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="border p-4 rounded-lg shadow-sm">
                  <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
                  {tag && <span className="bg-pink-200 text-pink-600 px-2 py-1 rounded-full text-sm">{tag}</span>}
                  <h2 className="text-lg font-semibold mt-2">{title}</h2>
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-500">
                      {'★'.repeat(Math.floor(rating))}
                      {'☆'.repeat(5 - Math.floor(rating))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({reviews})</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-lg font-semibold text-red-600">{price}₫</span>
                    {oldPrice && <span className="text-sm text-gray-500 line-through ml-2">{oldPrice}₫</span>}
                    {discount && <span className="ml-2 text-sm text-red-600">{discount}%</span>}
                  </div>
                </div> */}
        </div>
      </div>

      <OtherProducts />
      <div className="flex justify-center">
        <button className="w-80 px-6 py-2 text-pink-500 border border-pink-500 rounded-full hover:bg-pink-100 focus:outline-none">
          <p className="text-lg font-medium">
            <a href="/allProducts">
            Xem Thêm
            </a>
          </p>
        </button>
      </div>

      <div className="my-10">
        <div className="text-4xl mb-10 font-medium text-pink-500 font-bold px-4 py-2 rounded-xl font-sans">
          Các chủ đề dành cho mẹ và bé
        </div>
        <div className="flex">
          <div className="w-1/4 rounded-xl p-5 bg-red-300">
            <div className="font-bold mb-10">6 chủ đề dành cho mẹ và bé</div>
            {momMilTopics.map((topic, index) => (
              <div className="mb-5">
                {index + 1}. {topic.content}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap w-3/4 pl-5">
            {momMilTopics.map((topic) => (
              <div className="w-1/3 px-5 mb-2">
                <img src={topic.imageURL} className="rounded-xl mb-2" />
                <div className="text-sm text-neutral-500">{topic.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <img className="rounded-xl" src={"https://res.cloudinary.com/dgnmitdno/image/upload/v1720379573/shutterstock_308793989-0c93fc2a81a04d49b8d2bfc5e221c1e8_lpciq8.webp"} /> */}
    </div>
  );
}
