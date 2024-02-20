"use client";

import React, { useEffect, useState } from "react";
import CreateStore from '@/components/store/CreateStore'

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
                <div className="bg-zinc-50 min-h-full">
                    <CreateStore />
                </div>
            ) : (
                <p>Please Login</p>
            )}

        </>
    );

}
export default App;
