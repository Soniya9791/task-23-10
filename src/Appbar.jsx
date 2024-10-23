import React, { useState } from "react";


const Appbar = () => {
  const[open,setOpen]=useState(true)
  const menuclick = () => {
    console.log("menuclick");
    setOpen(!open)
  };
  return (
    <div className="mt-2.5 ">
      <nav className="md:flex justify-between max-w-7xl mx-auto">
        <div className="flex justify-between px-4">
          <div >
            <span className="text-3xl text-green-500 font-medium ">Fruit</span>
            <span className="font-thin text-3xl  text-gray-400">Shop</span>
          </div>
          <div className="block md:hidden">
            <button onClick={menuclick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${open?"block":"hidden"}`}>
          <ul className="flex space-x-10">
            <li className="menu border-b-4">
              <a href="#">Fruits</a>
            </li>
            <li className="menu">
              <a href="#">Vgetables</a>
            </li>
            <li className="menu">
              <a href="#">More</a>
            </li>
            <li className=" px-6 py-3  text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Appbar;
