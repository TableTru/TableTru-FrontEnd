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

export const editTableBooking = async (id: number, data: any) => {
  return await axios.put(url + `/tableBookings/${id}`, data).then((res: AxiosResponse) => {
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

  export const getBokingByUserId = async (userId: number) => {
    return await axios.get(url + `/tableBookings/GetUserBookingByStatus?UserId=${userId}`).then((res: AxiosResponse) => {
      return res.data.data.rows;
    }).catch((err: any) => {
      catchError(err, null, "getTableBooking");
      return [];
    });
  }

  export const getStoreBookingById = async (storeId: number) => {
    return await axios.get(url + `/tableBookings/GetStoreBookingByStatus?StoreId=${storeId}`).then((res: AxiosResponse) => {
      return res.data.data.rows;
    }).catch((err: any) => {
      catchError(err, null, "getTableBooking");
      return [];
    });
  }

  export const getStoreBookingByStatus = async (storeId: number, status: string) => {
    return await axios.get(url + `/tableBookings/GetStoreBookingByStatus?StoreId=${storeId}&status=${status}`).then((res: AxiosResponse) => {
      return res.data.data.rows;
    }).catch((err: any) => {
      catchError(err, null, "getTableBooking");
      return [];
    });
  }

  export const CheckBookingTime = async (storeId: number, maxCount: number) => {
    return await axios.get(url + `/tableBookings/CheckBookingTime?StoreId=${storeId}&maxCount=${maxCount}`).then((res: AxiosResponse) => {
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
