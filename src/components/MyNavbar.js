import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import cart from "../assets/cart.png";
import heart from "../assets/heart.jpeg";

const MyNavbar = () => {
  const [isActivated, setIsActivated] = useState(false);
  // const cartCount = 5;

  const handleClick = () => {
    setIsActivated(!isActivated);
  };
  return (
    <div>
      <section class="mx-auto w-full max-w-screen-xl  ">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 border">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="Logo" />
            </a>
            <div className="flex items-center gap-2 md:order-2">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
              >
                <svg
                  className="w-5 h-5"
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
                <span className="sr-only">Search</span>
              </button>
              {isActivated ? (
                <div className="relative hidden md:block">
                  <div className="flex justify-between items-center">
                    <div className="absolute inset-y-0 start-0 flex justify-between items-center ps-3 pointer-events-none">
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

                      <span className="sr-only">Search icon</span>
                    </div>

                    <input
                      type="text"
                      id="search-navbar"
                      className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                      placeholder="Search..."
                    />
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400 -ml-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={handleClick}
                    >
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="hidden md:block">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    onClick={handleClick}
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
              )}
              <div className="flex items-center">
                <span className="hidden md:flex">
                  {" "}
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 101 101"
                    id="user"
                  >
                    <path d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"></path>
                  </svg>
                  <h1> Login</h1>
                </span>
                <div className="flex items-center gap-1 space-x-2 ml-2">
                  <button
                    type="button"
                    class="relative inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-lg focus:outline-none "
                  >
                    <img className="w-5 h-5" src={heart} alt="heart" />
                    <span class="sr-only">Notifications</span>
                    <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                      10
                    </div>
                  </button>
                  <button
                    type="button"
                    class="relative inline-flex items-center p-2 text-sm font-medium text-center text-white  rounded-lg  focus:outline-none focus:ring-blue-300 "
                  >
                    <img className="w-5 h-5" src={cart} alt="cart" />
                    <span class="sr-only">Notifications</span>
                    <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                      10
                    </div>
                  </button>
                </div>
              </div>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            {/* ===== main dropdown */}

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div className="relative mt-3 md:hidden">
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
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                  placeholder="Search..."
                />
              </div>
              <ul className="hidden md:flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="border-b-2 border-white hover:border-red-600">
                  <button
                    id="dropdownDefaultButton-1"
                    data-dropdown-toggle="dropdown-1"
                    className="block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-red-500"
                    aria-current="page"
                    type="button"
                  >
                    MEN
                  </button>
                </li>
                {/* ===== */}

                {/* Dropdown menu  */}
                <div
                  id="dropdown-1"
                  class="w-full z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow  border dark:bg-gray-700"
                >
                  <div className="grid md:grid-cols-7">
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">1 BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                  </div>
                </div>

                {/* ===== */}
                <li className="border-b-2 border-white hover:border-red-600">
                  <button
                    id="dropdownDefaultButton-2"
                    data-dropdown-toggle="dropdown-2"
                    className="block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-red-500"
                    type="button"
                  >
                    WOMEN
                  </button>
                </li>
                {/* ===== */}

                {/* Dropdown menu  */}
                <div
                  id="dropdown-2"
                  class="w-full z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow  border dark:bg-gray-700"
                >
                  <div className="grid md:grid-cols-7">
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">2 BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                  </div>
                </div>

                <li className="border-b-2 border-white hover:border-red-600">
                  <button
                    id="dropdownDefaultButton-3"
                    data-dropdown-toggle="dropdown-3"
                    className="block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-red-500"
                    type="button"
                  >
                    KIDS & INFANTS
                  </button>
                </li>
                {/* ===== */}

                {/* Dropdown menu  */}
                <div
                  id="dropdown-3"
                  class="w-full z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow  border dark:bg-gray-700"
                >
                  <div className="grid md:grid-cols-7">
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">3 BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                  </div>
                </div>
                <li className="border-b-2 border-white hover:border-red-600">
                  <button
                    id="dropdownDefaultButton-4"
                    data-dropdown-toggle="dropdown-4"
                    className="block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-red-500"
                    type="button"
                  >
                    KIDS & INFANTS
                  </button>
                </li>
                {/* ===== */}

                {/* Dropdown menu  */}
                <div
                  id="dropdown-4"
                  class="w-full z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow  border dark:bg-gray-700"
                >
                  <div className="grid md:grid-cols-7">
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">4 BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                    <div className="p-5">
                      <h1 className="text-red-600 teaxt-sm">BOTTOM WEAR</h1>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                      <p className="text-gray-400 text-sm">Jeans</p>
                    </div>
                  </div>
                </div>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    DISCOUNT ZONE
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                  >
                    WINTER WEAR
                  </a>
                </li>
              </ul>
              <ul>
                <div className="md:hidden grid grid-cols-1">
                  <div className=" bg-red-600 py-6 flex justify-between items-center px-2 mt-5">
                    <div className="flex">
                      <svg
                        className="w-10 h-10 text-white "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 101 101"
                        id="user"
                      >
                        <path
                          fill="#fff"
                          d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"
                        ></path>
                      </svg>
                      <h1 className="text-white text-3xl"> Login</h1>
                    </div>

                    <button
                      className="text-white font-bold text-4xl pr-4"
                      data-collapse-toggle="navbar-search"
                      type="button"
                      aria-controls="navbar-search"
                      aria-expanded="false"
                    >
                      x
                    </button>
                  </div>
                  <div className="border-b-2 border-red-600 py-6 flex justify-between items-center px-2">
                    <img
                      className="w-24 h-24 border border-red-600 rounded-xl "
                      src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4911.jpg?w=1060&t=st=1706455774~exp=1706456374~hmac=5f8a8a031d1105e77b4b51cecf0e8a1aa619f9c1587c2484f6d830b3e470dd9b"
                      alt="das"
                    />{" "}
                    <h1 className="text-3xl">MEN</h1>{" "}
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 64 64"
                      id="right-arrow"
                    >
                      <path
                        fill="#ef4444"
                        stroke="#ef4444"
                        stroke-miterlimit="10"
                        stroke-width="4"
                        d="M62.56,32l-28-28,28,28-28,28"
                      ></path>
                      <line
                        x1="1.44"
                        x2="62.56"
                        y1="32"
                        y2="32"
                        fill="#ef4444"
                        stroke="#ef4444"
                        stroke-miterlimit="10"
                        stroke-width="4"
                      ></line>
                    </svg>
                  </div>
                  <div className="border-b-2 border-red-600 py-6 flex justify-between items-center px-2">
                    <img
                      className="w-24 h-24 border border-red-600 rounded-xl"
                      src="https://img.freepik.com/free-photo/girl_23-2148168214.jpg?w=826&t=st=1706455876~exp=1706456476~hmac=491c97721323c691b742f6618a7d8c90f6f3097134d71549be6e21ef7f86f558"
                      alt="das"
                    />{" "}
                    <h1 className="text-3xl">WOMEN</h1>{" "}
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 64 64"
                      id="right-arrow"
                    >
                      <path
                        fill="#ef4444"
                        stroke="#ef4444"
                        stroke-miterlimit="10"
                        stroke-width="4"
                        d="M62.56,32l-28-28,28,28-28,28"
                      ></path>
                      <line
                        x1="1.44"
                        x2="62.56"
                        y1="32"
                        y2="32"
                        fill="#ef4444"
                        stroke="#ef4444"
                        stroke-miterlimit="10"
                        stroke-width="4"
                      ></line>
                    </svg>
                  </div>
                  <div className="border-b-2 border-red-600 py-6 flex justify-between items-center px-2">
                    <img
                      className="w-24 h-24 border border-red-600 rounded-xl"
                      src="https://img.freepik.com/free-photo/portrait-smiley-little-boy_23-2148445672.jpg?w=826&t=st=1706455982~exp=1706456582~hmac=344b09c417f08522a2d63411d9c7829f2df2941a7da89d3838ba805c2ab455b8"
                      alt="das"
                    />{" "}
                    <h1 className="text-3xl">Kids & Infants</h1>{" "}
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 64 64"
                      id="right-arrow"
                    >
                      <path
                        fill="#ef4444"
                        stroke="#ef4444"
                        stroke-miterlimit="10"
                        stroke-width="4"
                        d="M62.56,32l-28-28,28,28-28,28"
                      ></path>
                      <line
                        x1="1.44"
                        x2="62.56"
                        y1="32"
                        y2="32"
                        fill="#ef4444"
                        stroke="#ef4444"
                        stroke-miterlimit="10"
                        stroke-width="4"
                      ></line>
                    </svg>
                  </div>
                  <div className="border-b-2 border-red-600 py-6 flex justify-between items-center px-2">
                    <img
                      className="w-24 h-24 border border-red-600 rounded-xl p-5"
                      src={logo}
                      alt="das"
                    />{" "}
                    <h1 className="text-3xl">MEN</h1>{" "}
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 64 64"
                      id="right-arrow"
                    >
                      <path
                        fill="#ef4444"
                        stroke="#ef4444"
                        stroke-miterlimit="10"
                        stroke-width="4"
                        d="M62.56,32l-28-28,28,28-28,28"
                      ></path>
                      <line
                        x1="1.44"
                        x2="62.56"
                        y1="32"
                        y2="32"
                        fill="#ef4444"
                        stroke="#ef4444"
                        stroke-miterlimit="10"
                        stroke-width="4"
                      ></line>
                    </svg>
                  </div>
                  <div className="border-b-2 border-red-600 py-6 flex justify-between items-center px-2">
                    <img
                      className="w-24 h-24 border border-red-600 rounded-xl p-5"
                      src={logo}
                      alt="das"
                    />{" "}
                    <h1 className="text-3xl">MEN</h1>{" "}
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 64 64"
                      id="right-arrow"
                    >
                      <path
                        fill="#ef4444"
                        stroke="#ef4444"
                        stroke-miterlimit="10"
                        stroke-width="4"
                        d="M62.56,32l-28-28,28,28-28,28"
                      ></path>
                      <line
                        x1="1.44"
                        x2="62.56"
                        y1="32"
                        y2="32"
                        fill="#ef4444"
                        stroke="#ef4444"
                        stroke-miterlimit="10"
                        stroke-width="4"
                      ></line>
                    </svg>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default MyNavbar;
