import React, { useState } from "react";
import logo from "../../../assets/Logo.svg";
import { IoChevronDown } from "react-icons/io5";

const Header_SignUp = () => {
  const [selectedItem, setSelectedItem] = useState("English (UK)");
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <div className="flex justify-between mb-6">
      <div className="flex gap-3">
        <img src={logo} alt="" />
        <h1 className="text-lg font-bold text-[#4E5D78]">Meetmax</h1>
      </div>

      <div className="relative inline-block text-left ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-between gap-2 items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-[#4E5D78] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>{selectedItem}</span>
          <IoChevronDown />
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdownButton"
            >
              {selectedItem == "English (UK)" ? (
                <a
                  href="#"
                  onClick={() => handleItemClick("Bangla (BN)")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Bangla (BN)
                </a>
              ) : (
                <a
                  href="#"
                  onClick={() => handleItemClick("English (UK)")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  English (UK)
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header_SignUp;
