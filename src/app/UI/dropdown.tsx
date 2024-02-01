"use client";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
type Prop = {
  items: string[];
  placeholder: string;
  itemSelected?: string;
};
export const Dropdown = (p: Prop) => {
  const itemSelected = p.itemSelected || "";
  const [selectedItem, setSelectedItem] = useState(itemSelected);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownClick = () => {
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
            className=" h-9 flex flex-row w-full items-center justify-between w-full rounded-md  bg-gray-100 px-2 text-sm font-medium text-gray-700 border-2 "
          >
            {selectedItem || p.placeholder}
            <div className="ml-4">
              {isOpen ? <FaArrowUp /> : <FaArrowDown />}
            </div>
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="h-37 overflow-auto origin-top-right absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
