"use client";


import React, { useEffect, useState } from "react";
import EditStore from '@/components/store/EditStore'

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
            {isLogin? (
                <div className="bg-zinc-50 min-h-full">
                    <EditStore />
                </div>
            ) : (
                <p>Please Login</p>
            )}

        </>
    );

}
export default App;
