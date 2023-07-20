import React from "react";

const Navbar = () => {
  return (
    // Create a tailwind navbar component
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Theme Builder
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 0h20v20H0V0zm2 3h16v2H2V3zm0 5h16v2H2V8zm0 5h16v2H2v-2z"></path>
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {/* <a href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
                        Docs
                    </a> */}
          <a
            href="#responsive-header"
            className="block mt-4 ml-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white"
          >
            Blog
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 ml-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 ml-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white"
          >
            Portfolio
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 ml-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white"
          >
            Contact
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
