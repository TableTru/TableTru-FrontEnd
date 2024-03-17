import axios, { AxiosResponse } from "axios";

const url = "http://localhost:8000";

export const getAllPromotion = async () => {
  return await axios.get(url + '/promotions/').then((res: AxiosResponse) => {
    return res.data.data.rows;
  }).catch((err: any) => {
    catchError(err, null, "getPromotion");
    return [];
  });
}

export const getPromotionById = async (id: number) => {
  return await axios.get(url + `/promotions/${id}`).then((res: AxiosResponse) => {
    return res.data.data;
  }).catch((err: any) => {
    catchError(err, null, "getUser");
    return [];
  });
}

export const createPromotion = async (data: any) => {
  console.log(data);
  return await axios.post(url + '/promotions/', data).then((res: AxiosResponse) => {
    return res;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const editPromotion = async (id: number, data: any) => {
  return await axios.put(url + `/promotions/${id}`, data).then((res: AxiosResponse) => {
    return res.data;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const GetAllPromotionByStoreId = async (storeId: number) => {
    return await axios.get(url + `/promotions/GetAllPromotionByStoreId?storeId=${storeId}`).then((res: AxiosResponse) => {
      return res.data.data.rows;
    }).catch((err: any) => {
      catchError(err, null, "getPromotion");
      return [];
    });
  }

  export const GetAllPromotionByUserId = async (userId: number) => {
    return await axios.get(url + `/promotions/GetAllPromotionByUserId?userId=${userId}`).then((res: AxiosResponse) => {
      return res.data.data.rows;
    }).catch((err: any) => {
      catchError(err, null, "getPromotion");
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
