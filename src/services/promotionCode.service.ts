import axios, { AxiosResponse } from "axios";

const url = "http://localhost:8000";

export const getAllPromotionCode = async () => {
  return await axios.get(url + '/promotionCodes/').then((res: AxiosResponse) => {
    return res.data.data.rows;
  }).catch((err: any) => {
    catchError(err, null, "getPromotionCode");
    return [];
  });
}

export const getPromotionCodeById = async (id: number) => {
  return await axios.get(url + `/promotionCodes/${id}`).then((res: AxiosResponse) => {
    return res.data.data;
  }).catch((err: any) => {
    catchError(err, null, "getUser");
    return [];
  });
}

export const createPromotionCode = async (data: any) => {
  console.log(data);
  return await axios.post(url + '/promotionCodes/', data).then((res: AxiosResponse) => {
    return res;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const editPromotionCode = async (id: number, data: any) => {
  return await axios.put(url + `/promotionCodes/${id}`, data).then((res: AxiosResponse) => {
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
