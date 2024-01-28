"use client";

import {Button} from "@material-ui/core";

export default function PhoneNumber() {
  return (
    <>
      <div className="py-6 flex flex-col mb-6 border-t border-b border-gray-200 dark:border-gray-700">
        <span className="text-base my-4 text-gray-600 dark:text-gray-400">
          เลือกโค๊ดส่วนลด
        </span>
          <button type="button"
                  className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              เลือกโค๊ตส่วนลด
          </button>

      </div>
    </>
  );
}
