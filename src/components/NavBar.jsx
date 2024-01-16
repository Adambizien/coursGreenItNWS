import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from '../pages/home'

import { NavLink } from 'react-router-dom/dist';



function NavBar() {
  
  const getLinkClass = ({ isActive }) => isActive ? 'text-blue-200' : 'text-white';
  console.log(getLinkClass);
  
  return (
    <>
      <Router>
        <nav class="bg-black border-gray-200 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="msv-favicon.svg" class="h-8" alt="Flowbite Logo" />
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black ">
                <li>
                  <a href="#" class="block   py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 " aria-current="page">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-grey md:p-0 ">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-grey md:p-0 ">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-grey md:p-0 ">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-grey md:p-0 ">Lorem ipsum</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
    
    
  )
}

export default NavBar