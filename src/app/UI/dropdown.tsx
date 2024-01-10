"use client";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
type Prop = {
  items: string[];
  placeholder: string;
};
export const Dropdown = (p: Prop) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownClick = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };
  const handleItemClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: string
  ) => {
    setSelectedItem(item);
    setIsOpen(false);
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            onClick={dropdownClick}
            className="flex flex-row w-full items-center justify-between w-full rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-primary"
          >
            {selectedItem || p.placeholder}
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
            {p.items.map((item, index) => (
              <button
                key={index}
                onClick={(e) => handleItemClick(e, item)}
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
