import { useState, useEffect } from "react";

export default function Amount() {
  return (
    <div>
      <input
        className="rounded-2xl p-5 bg-gray-100 border-b transition duration-300 hover:bg-gray-200 outline-none shadow-[0_-4px_9px_rgba(0,0,0,0.2)] h-15 w-75 ml-10 mr-10 text-black"
        type="text"
        placeholder="Enter Amount"
      />
      <input
        className="rounded-2xl p-5 bg-gray-100 border-b transition duration-300 hover:bg-gray-200  outline-none shadow-[0_-4px_9px_rgba(0,0,0,0.2)] h-15 w-75 mr-20 text-black"
        type="text"
        placeholder="Enter amount"
      />
    </div>
  );
}
