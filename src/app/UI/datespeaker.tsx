"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className=" w-full ">
      <DatePicker
        selected={selectedDate}
        onChange={(date: any) => setSelectedDate(date)}
        customInput={
          <input
            placeholder="DD/MM/YYYY"
            value={selectedDate ? formatDate(selectedDate) : ""}
            readOnly
            className=" border w-full p-1 border-primary rounded-lg focus:border-primary focus:outline-none"
          ></input>
        }
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
};

// Helper function to format date as DD/MM/YYYY
const formatDate = (date: any) => {
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  return `${day}/${month}/${year}`;
};

export default CustomDatePicker;
