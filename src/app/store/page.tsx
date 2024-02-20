"use client";

import StoreHome from '@/components/store/StoreHome'
import React, { useEffect, useState } from "react";

function App() {
    const [isLogin, setIsLogin] = useState(false);

    const checkLoginStatus = () => {
        const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
        if (userData) {
            console.log(userDataJson);
            setIsLogin(true)
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
                </div>
            ) : (
                <p>Please Login</p>
            )}
        </>
    );

}
export default App;
