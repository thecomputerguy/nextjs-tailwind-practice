import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-6 container mx-auto shadow-sm text-inset-56">
      <svg
        class="h-10 w-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 64"
      >
        <defs></defs>
        <title>logo</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g id="Group_16" data-name="Group 16">
              <g id="Group_15" data-name="Group 15">
                <g id="Group_12" data-name="Group 12">
                  <path
                    id="Path_35"
                    data-name="Path 35"
                    class="cls-1"
                    d="M53.52,1.87l-22,5.39a1.61,1.61,0,0,1-1.23-.21L19.89.25a1.57,1.57,0,0,0-1.3-.19l-18,5.3A.77.77,0,0,0,0,6.09V16.87L18.59,11.4a1.57,1.57,0,0,1,1.3.19l10.4,6.79a1.53,1.53,0,0,0,1.23.21L54,13.09V2.23a.39.39,0,0,0-.39-.38Z"
                  ></path>
                  <path
                    id="Path_36"
                    data-name="Path 36"
                    class="cls-1"
                    d="M40.25,27.84l-8.73,2.1a1.57,1.57,0,0,1-1.23-.21l-10.4-6.8a.37.37,0,0,0-.53.11.31.31,0,0,0-.07.2V33.47a.75.75,0,0,0,.34.63l10.66,7a1.57,1.57,0,0,0,1.23.2l9.23-2.21A6.86,6.86,0,0,0,46,32.45v-.21a4.62,4.62,0,0,0-4.68-4.55A4.93,4.93,0,0,0,40.25,27.84Z"
                  ></path>
                  <path
                    id="Path_37"
                    data-name="Path 37"
                    class="cls-1"
                    d="M40.25,50.52l-8.73,2.1a1.61,1.61,0,0,1-1.23-.21l-10.4-6.8a.38.38,0,0,0-.53.1.35.35,0,0,0-.07.21V56.15a.75.75,0,0,0,.34.63l10.66,7a1.53,1.53,0,0,0,1.23.21l9.23-2.22A6.84,6.84,0,0,0,46,55.13v-.21a4.62,4.62,0,0,0-4.68-4.55A4.39,4.39,0,0,0,40.25,50.52Z"
                  ></path>
                </g>
                <path
                  id="Path_38"
                  data-name="Path 38"
                  class="cls-2"
                  d="M30.86,41.29V30a1.63,1.63,0,0,0,.66,0L35.28,29l2.2,10.8-6,1.46A1.47,1.47,0,0,1,30.86,41.29Zm8.82,9.33-8.16,2a1.63,1.63,0,0,1-.66,0V64a1.63,1.63,0,0,0,.66,0l10.36-2.54Zm-8.82-32a1.63,1.63,0,0,0,.66,0l1.57-.38L30.86,7.28Z"
                ></path>
                <g id="Group_13" data-name="Group 13" class="cls-3">
                  <path
                    id="Path_39"
                    data-name="Path 39"
                    class="cls-4"
                    d="M19.29,11.36a1.82,1.82,0,0,1,.6.23l10.4,6.8a1.41,1.41,0,0,0,.57.22V7.27a1.41,1.41,0,0,1-.57-.22L19.89.25a1.82,1.82,0,0,0-.6-.23Z"
                  ></path>
                  <path
                    id="Path_40"
                    data-name="Path 40"
                    class="cls-4"
                    d="M30.86,52.64a1.67,1.67,0,0,1-.57-.23l-10.4-6.8a.39.39,0,0,0-.54.11.36.36,0,0,0-.06.2V56.15a.75.75,0,0,0,.34.63l10.66,7a1.73,1.73,0,0,0,.57.22Z"
                  ></path>
                  <path
                    id="Path_41"
                    data-name="Path 41"
                    class="cls-4"
                    d="M19.89,22.93a.39.39,0,0,0-.54.11.36.36,0,0,0-.06.2V33.47a.75.75,0,0,0,.34.63l10.66,7a1.58,1.58,0,0,0,.57.22V30a1.43,1.43,0,0,1-.57-.23Z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <div class="text-lg text-gray-600 hidden lg:flex">
        <a
          href="#"
          class="block mt-4 lg:inline-block text-green-400 lg:mt-0 mr-10"
        >
          Home
        </a>
        <a
          href="#"
          class="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
        >
          Services
        </a>
        <a
          href="#"
          class="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
        >
          Portfolio
        </a>
        <a
          href="#"
          class="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0 mr-10"
        >
          Company
        </a>
        <a
          href="#"
          class="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0"
        >
          Contact
        </a>
      </div>

      <div class="flex items-center">
        <div class="mr-5 lg:mr-0">
          <button class="py-2 px-6 rounded-md text-gray-600 hover:text-gray-700 text-lg">
            Sign in
          </button>
          <button class="py-2 px-6 bg-green-500 hover:bg-green-500 rounded-md text-white text-lg">
            Sign up
          </button>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-4 py-3 border rounded text-green-500 border-green-500 focus:outline-none">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
Nav;
