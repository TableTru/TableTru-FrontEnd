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

    function information(){
        return (
            <>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li className="flex items-center">
                        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        At least 10 characters
                    </li>
                    <li className="flex items-center">
                        <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        At least one lowercase character
                    </li>
                    <li className="flex items-center">
                        <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        At least one special character, e.g., ! @ # ?
                    </li>
                </ul>

            </>

        );
    }


    function handleButtonConfirm() {
        Swal.fire<data>({
            title: "โปรดตรวจสอบรายละเอียดการจอง",
            text: "หากต้องการแก้ไข โปรดติดต่อสาขาที่ทำการจองร้านอาหารไว้",
            icon: "warning",
            html: `

    <input type="text" ref={ref} id="username"  class="swal2-input" placeholder="Username" onChange={handleChange}>
    <input type="text" ref={ref}  id="phoneNumber" class="swal2-input" placeholder="Phone Number" onChange={handleChange}  >
  `,
            didOpen: () => {
                const popup = Swal.getPopup()!
                usernameInput = popup.querySelector('#username') as HTMLInputElement
                phoneInput = popup.querySelector('#phoneNumber') as HTMLInputElement
                usernameInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm()
                phoneInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm()
            },
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            confirmButtonColor: "#0E9F6E",
            cancelButtonText: "ย้อนกลับ",
            reverseButtons: true,
            preConfirm: () => {
                const username = usernameInput.value
                const phoneNumber = phoneInput.value
                if (!username || !phoneNumber) {
                    Swal.showValidationMessage(`Please enter username and phone number`)
                }
                return { username, phoneNumber }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "ยืนยันสำเร็จ",
                    text: "",
                    icon: "success"
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