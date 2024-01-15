import axios, { AxiosResponse } from "axios";

const url = "http://localhost:8000";

export const getUser = async () => {
  return await axios.get(url + '/users/').then((res: AxiosResponse) => {
    return res.data.data.rows;
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

export const editUser = async (data: any) => {
  return await axios.put(url + '/users/', data).then((res: AxiosResponse) => {
    return res.data;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
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
