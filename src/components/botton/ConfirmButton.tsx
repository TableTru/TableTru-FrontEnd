"use client";
import * as React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function ConfirmButton () {

    function handleButtonConfirm() {
        Swal.fire({
            title: "โปรดตรวจสอบรายละเอียดการจอง",
            text: "หากต้องการแก้ไข โปรดติดต่อสาขาที่ทำการจองร้านอาหารไว้",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            confirmButtonColor: "#0E9F6E",
            cancelButtonText: "ย้อนกลับ",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "ยืนยันสำเร็จ",
                    text: "",
                    icon: "success"
                });
            }
        });
    }
    return (
        <>
            <button className="w-full px-4 py-3 text-center text-gray-100 bg-red-600
            border border-transparent dark:border-gray-700 hover:border-red-500
            hover:text-red-700 hover:bg-red-100 dark:text-gray-400 dark:bg-gray-700
            dark:hover:bg-gray-900 rounded-xl" onClick={handleButtonConfirm}>
                ยืนยันการจอง
            </button>
        </>
    );
};