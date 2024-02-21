"use client";

import BottomNavigationbar from "@/components/Bottombar";
import Appbar from "@/components/HeaderAppBar";
import TabSelect from "@/components/activity/TabSelect";
import React, { useEffect, useState } from "react";

export default function Activity() {
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
                <TabSelect />
            ) : (
                <p>Please Login</p>
            )}
        </>

    );
}