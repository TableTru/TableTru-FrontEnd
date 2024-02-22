"use client";

import ProfileCard from "@/components/profile/ProfileCard";
import EditProfileCard from '@/components/profile/EditProfileCard'
import React, { useEffect, useState } from "react";

export default function Profile() {
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
        <ProfileCard />
      ) : (
        <p>Please Login</p>
      )}
    </>
  );
}