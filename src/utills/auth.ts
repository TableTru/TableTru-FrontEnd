import axios, { AxiosResponse } from "axios";

const url = "http://localhost:8000";

export const getLoginUser = async (data: any) => {
  return await axios.get(url + `/users/getLoginUser?username=${data.username}&password=${data.password}`).then((res: AxiosResponse) => {
    return res.data.data;
  }).catch((err: any) => {
    catchError(err, null, "getUser");
    return null;
  });
}

// export const checkLoginStatus = () => {
//   const userData = localStorage.getItem("userData")
//   const userDataJson = JSON.parse(userData || "[]");
//   if (userData) {
//     console.log(userDataJson);
//   }else{
//     console.log("not login");
//     window.location.replace('/')
//   }
// }

function catchError(error: any, path: any, func: any): void {
  try {
    return;
  } catch (err) {
    console.error("Response catchError : ", error);
    console.log(err);
    return;
  }
}
