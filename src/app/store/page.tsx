"use client";

import StoreHome from '@/components/store/StoreHome'
import React, { useEffect, useState } from "react";
import UploadImageToStorage from '@/components/store/UploadImage'

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState()

    const checkLoginStatus = () => {
        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
        if (userData) {
            console.log(userDataJson);
            setIsLogin(true)
            if (userDataJson.user_status === "merchant") {
                setUserData(userDataJson)
                console.log(userDataJson.user_status);
            }
            else {
                console.log("not merchant");
                window.location.replace('/')
            }


        } else {
            console.log("not login");
            window.location.replace('/login')
        }
    }

    useEffect((() => {
        checkLoginStatus()
    }), [])
    return (
        <>
            {isLogin ? (
                <div className="min-h-screen bg-zinc-50 pt-8 space-x-4">
                    <StoreHome />
                    <UploadImageToStorage/>
                </div>
            ) : (
                <p>Please Login</p>
            )}
        </>
    );

}
export default App;
