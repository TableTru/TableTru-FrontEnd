import axios, { AxiosResponse } from "axios";

const url = "http://localhost:8000";

export const getUserById = async (id: number) => {
  return await axios.get(url + `/users/${id}`).then((res: AxiosResponse) => {
    return res.data.data;
  }).catch((err: any) => {
    catchError(err, null, "getUser");
    return [];
  });
}

export const createUser = async (data: any) => {
  console.log(data);
  return await axios.post(url + '/users/', data).then((res: AxiosResponse) => {
    return res;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const editUser = async (id: number, data: any) => {
  return await axios.put(url + `/users/${id}`, data).then((res: AxiosResponse) => {
    return res.data.data;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const getRegisterCheck = async (email: string) => {
  return await axios.get(url + `/users/checkRegisterUser?email=${email}`).then((res: AxiosResponse) => {
    return res.data.success;
  }).catch((err: any) => {
    catchError(err, null, "getUser");
    return [];
  });
}

export const getUserReview = async (id: number) => {
  return await axios.get(url + `/users/getUserReview/${id}`).then((res: AxiosResponse) => {
    return res.data.data;
  }).catch((err: any) => {
    catchError(err, null, "getUser");
    return [];
  });
}

function catchError(error: any, path: any, func: any): void {
  try {
    return;
  } catch (err) {
    console.error("Response catchError : ", error);
    console.log(err);
    return;
  }
}
