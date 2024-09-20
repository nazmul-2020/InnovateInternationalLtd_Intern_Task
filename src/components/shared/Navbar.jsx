import React from "react";
// import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";

const Navbar = () => {
  return (
    <div>
      <nav class=" border-b border-black  w-full  bg-[#363636] text-white flex items-center  h-20">
        <div class="container mx-auto">
          <div class="w-full flex  flex-col lg:flex-row">
            <div
              class="hidden w-full lg:flex  lg:px-11 "
              id="navbar-default-with-search"
            >
              <ul class="flex items-center flex-col mt-4 lg:mt-0 lg:flex-row gap-8">
                <li className="flex items-center justify-cen ">
                  <a
                    href="javascript:;"
                    class=" text-sm lg:text-base font-medium  mb- lg:mr-2 md:mb-0 md:mr-3"
                  >
                    Home
                  </a>
                  <MdKeyboardArrowDown className="text-lg mt-1.5" />
                </li>
                <li className="flex items-center justify-cen ">
                  <a
                    href="javascript:;"
                    class=" text-sm lg:text-base font-medium  mb- lg:mr-2 md:mb-0 md:mr-3"
                  >
                    Event
                  </a>
                  <MdKeyboardArrowDown className="text-lg mt-1.5" />
                </li>
                <li className="flex items-center justify-cen ">
                  <a
                    href="javascript:;"
                    class=" text-sm lg:text-base font-medium  mb- lg:mr-2 md:mb-0 md:mr-3"
                  >
                    Contact
                  </a>
                  <MdKeyboardArrowDown className="text-lg mt-1.5" />
                </li>
                <li className="flex items-center justify-cen ">
                  <a
                    href="javascript:;"
                    class=" text-sm lg:text-base font-medium  mb- lg:mr-2 md:mb-0 md:mr-3"
                  >
                    Product
                  </a>
                  <MdKeyboardArrowDown className="text-lg mt-1.5" />
                </li>
              </ul>
              <div class="flex items-center ml-auto justify-center">
                <div class="relative ">
                  <input
                    type="text"
                    id="input-group-search"
                    class="block w-full py-2 px-4 pl-10 text-sm  placeholder-gray-500 border border-gray-300 rounded-full focus:outline-none "
                    placeholder="Search "
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="font-bold"
                    >
                      <path
                        d="M15.75 15.75L14.25 14.25M15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25Z"
                        stroke="#6B7280"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
