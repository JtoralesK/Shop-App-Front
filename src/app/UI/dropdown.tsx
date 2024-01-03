"use client";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const items = ["Female pant", "Man cloth", "Sport short", "Sport Shoes"]; // Aquí tus elementos de dropdown

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="flex flex-row w-full items-center justify-between w-full rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedItem || "Select Category"}
            <div className="ml-4">
              {isOpen ? <FaArrowUp /> : <FaArrowDown />}
            </div>
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
