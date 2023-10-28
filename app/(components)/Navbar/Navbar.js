"use client";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  useEffect(() => {
    // Close the sidebar when the user clicks anywhere in the body
    const bodyClickHandler = () => {
      if (sidebarVisible) {
        closeSidebar();
      }
    };

    if (sidebarVisible) {
      document.body.addEventListener("click", bodyClickHandler);
    } else {
      document.body.removeEventListener("click", bodyClickHandler);
    }

    return () => {
      document.body.removeEventListener("click", bodyClickHandler);
    };
  }, [sidebarVisible]);

  return (
    <div className="bg-purple-800 text-white p-1 flex justify-between items-center">
      <div className="flex items-center ">
        <div
          className="text-2xl lg:ml-[20vh] md:ml-[5vh] ml-1 mr-[25px] cursor-pointer"
          onClick={toggleSidebar}
        >
          &#9776;
        </div>
        <div className="text-2xl">
          <AiOutlineSearch />
        </div>
      </div>

      <div className="text-2xl font-serif font-bold">New York</div>
      <div className="flex items-center lg:mr-[20vh] mr:ml-[5vh] mr-1">
        <button className="bg-purple-500 text-white px-4 py-1 rounded">
          Login
        </button>
      </div>

      {sidebarVisible && (
        <div className="fixed top-0 left-0 h-full w-64 bg-purple-800 text-white p-4">
          <div className="text-2xl cursor-pointer" onClick={closeSidebar}>
            &times;
          </div>
          <ul>
            <li className="mb-2 cursor-pointer">
              <a href="/">Home Page</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/world">World</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/business">Business</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/politics">Politics</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/politics">U.S.</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/sports">Sports</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/health">Health</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/ny">N.Y</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/ny">Opinion</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/Tech">Tech</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/Tech">Science</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <hr />
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/arts">Arts</a>
            </li>
           
            <li className="mb-2 cursor-pointer">
              <a href="/style">Style</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/Food">Food</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/Travel">Travel</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/Travel">Magazine</a>
            </li>
            <li className="mb-2 cursor-pointer">
              <a href="/Travel">Real State</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
