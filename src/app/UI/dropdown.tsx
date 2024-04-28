"use client";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
type Prop = {
  items: string[];
  placeholder: string;
  itemSelected?: string;
  name: string;
  h?: string;
  disabled?: boolean;
};
export const Dropdown = (p: Prop) => {
  const { disabled } = p;
  const itemSelected = p.itemSelected || "";
  const [selectedItem, setSelectedItem] = useState(itemSelected);
  const [itemId, setItemId] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownClick = () => {
    if (!p.disabled) {
      setIsOpen(!isOpen);
    }
  };
  const handleItemClick = (item: string, id: number) => {
    setSelectedItem(item);
    setItemId(id + 1);
    dropdownClick();
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            onClick={dropdownClick}
            className={` h-9 flex flex-row w-full items-center justify-between w-full rounded-md  bg-gray-100 px-2 text-sm font-medium text-gray-700 border-2 ${
              disabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {selectedItem || p.placeholder}
            <input value={itemId} name={p.name} type="hidden" />
            <input
              value={selectedItem}
              name={p.name + "String"}
              type="hidden"
            />

            <div className={`ml-4 ${disabled && "hidden"}`}>
              {isOpen ? <FaArrowUp /> : <FaArrowDown />}
            </div>
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className={`${
            p.h ? p.h : " h-28 "
          } overflow-auto origin-top-right absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {p.items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item, index)}
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
