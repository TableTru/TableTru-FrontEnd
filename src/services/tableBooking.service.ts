import axios, { AxiosResponse } from "axios";

const url = "http://localhost:8000";

export const getTest = async () => {
    return await axios.get('https://www.melivecode.com/api/attractions').then((res: AxiosResponse) => {
      return res;
    }).catch((err: any) => {
      catchError(err, null, "getTableBooking");
      return [];
    });
  }

export const getTableBooking = async () => {
  return await axios.get(url + '/tableBookings/').then((res: AxiosResponse) => {
    return res.data.data.rows;
  }).catch((err: any) => {
    catchError(err, null, "getTableBooking");
    return [];
  });
}

export const createTableBooking = async (data: any) => {
  console.log(data);
  return await axios.post(url + '/tableBookings/', data).then((res: AxiosResponse) => {
    return res;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const editTableBooking = async (data: any) => {
  return await axios.put(url + '/tableBookings/', data).then((res: AxiosResponse) => {
    return res.data;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const getUserBookingByStatus = async (userId: number, status: string) => {
    return await axios.get(url + `/tableBookings/GetUserBookingByStatus?UserId=${userId}&status=${status}`).then((res: AxiosResponse) => {
      return res.data.data.rows;
    }).catch((err: any) => {
      catchError(err, null, "getTableBooking");
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