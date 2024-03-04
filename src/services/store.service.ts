import axios, { AxiosResponse } from "axios";

const url = "http://localhost:8000";

export const getTest = async () => {
    return await axios.get('https://www.melivecode.com/api/attractions').then((res: AxiosResponse) => {
      return res;
    }).catch((err: any) => {
      catchError(err, null, "getStore");
      return [];
    });
  }

export const getAllStore = async () => {
  return await axios.get(url + '/stores/').then((res: AxiosResponse) => {
    return res.data.data;
  }).catch((err: any) => {
    catchError(err, null, "getStore");
    return [];
  });
}

export const getStoreById = async (id: number) => {
  return await axios.get(url + `/stores/${id}`).then((res: AxiosResponse) => {
    return res.data.data;
  }).catch((err: any) => {
    catchError(err, null, "getUser");
    return [];
  });
}

export const createStore = async (data: any) => {
  console.log(data);
  return await axios.post(url + '/stores/', data).then((res: AxiosResponse) => {
    return res;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const editStore = async (id: number, data: any) => {
  return await axios.put(url + `/stores/${id}`, data).then((res: AxiosResponse) => {
    return res.data;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const getStoreImageByType = async (storeId: number, type: string) => {
  return await axios.get(url + `/stores/getStoreImageByType?id=${storeId}&type=${type}`).then((res: AxiosResponse) => {
    return res.data.data.rows;
  }).catch((err: any) => {
    catchError(err, null, "getStore");
    return [];
  });
}

export const editOpenTime = async (id: number, data: any) => {
  return await axios.put(url + `/opentimes/${id}`, data).then((res: AxiosResponse) => {
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
