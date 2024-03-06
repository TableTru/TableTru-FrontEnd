"use client";
import * as React from "react";
import Swal from "sweetalert2";
import PersonIcon from '@mui/icons-material/Person';
import withReactContent from 'sweetalert2-react-content'





export default function ConfirmButton () {
    type data =
        {
        username: "Leonic",
        phoneNumber: "0986266995",
        }

    let usernameInput: HTMLInputElement
    let phoneInput: HTMLInputElement


    const [username, setUserName] = React.useState('Leonic');
    const [phoneNumber, setPhoneNumber] = React.useState('0986266995');

    function handleChange(event) {
        event.preventDefault();
        setUserName(event.target.value);
        setPhoneNumber(event.target.value);
    }
    const ref = React.useRef(null);

    function handleButtonConfirm() {
        Swal.fire<data>({
            title: "แน่ใจหรือว่าจะยืนยัน",
            text: "โปรดตรวจสอบรายละเอียดการจอง",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            confirmButtonColor: "#0E9F6E",
            cancelButtonText: "ย้อนกลับ",
            reverseButtons: true,
  //           html: `
  //
  //   <input type="text" ref={ref} id="username"  class="swal2-input" placeholder="Username" onChange={handleChange}>
  //   <input type="text" ref={ref}  id="phoneNumber" class="swal2-input" placeholder="Phone Number" onChange={handleChange}  >
  // `,
  //           didOpen: () => {
  //               const popup = Swal.getPopup()!
  //               usernameInput = popup.querySelector('#username') as HTMLInputElement
  //               phoneInput = popup.querySelector('#phoneNumber') as HTMLInputElement
  //               usernameInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm()
  //               phoneInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm()
  //           },

  //           preConfirm: () => {
  //               const username = usernameInput.value
  //               const phoneNumber = phoneInput.value
  //               if (!username || !phoneNumber) {
  //                   Swal.showValidationMessage(`Please enter username and phone number`)
  //               }
  //               return { username, phoneNumber }
  //           }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "ยืนยันสำเร็จ",
                    text: "",
                    icon: "success",
                    confirmButtonText: "ตกลง",
                    confirmButtonColor: "#0E9F6E",
                });
            }
        })

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