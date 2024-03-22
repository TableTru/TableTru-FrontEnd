import axios, { AxiosResponse } from "axios";

const url = "http://localhost:8000";

export const getAllReview = async () => {
  return await axios.get(url + '/reviews/').then((res: AxiosResponse) => {
    return res.data.data.rows;
  }).catch((err: any) => {
    catchError(err, null, "getReview");
    return [];
  });
}

export const getReviewById = async (id: number) => {
  return await axios.get(url + `/reviews/${id}`).then((res: AxiosResponse) => {
    return res.data.data;
  }).catch((err: any) => {
    catchError(err, null, "getUser");
    return [];
  });
}

export const createReview = async (data: any) => {
  console.log(data);
  return await axios.post(url + '/reviews/', data).then((res: AxiosResponse) => {
    return res;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const editReview = async (id: number, data: any) => {
  return await axios.put(url + `/reviews/${id}`, data).then((res: AxiosResponse) => {
    return res.data;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const GetAllReviewByStoreId = async (storeId: number) => {
    return await axios.get(url + `/reviews/getAllReviewByStoreId?StoreId=${storeId}`).then((res: AxiosResponse) => {
      return res.data.data.rows;
    }).catch((err: any) => {
      catchError(err, null, "getReview");
      return [];
    });
  }

  export const GetAllReviewByUserId = async (userId: number) => {
    return await axios.get(url + `/reviews/getAllReviewByUserId=${userId}`).then((res: AxiosResponse) => {
      return res.data.data.rows;
    }).catch((err: any) => {
      catchError(err, null, "getReview");
      return [];
    });
  }

  export const GetStoreRatingCount = async (StoreId: number, ratingStatus: boolean) => {
    return await axios.get(url + `/reviews/GetStoreRatingCount?StoreId=${StoreId}&status=${ratingStatus}`).then((res: AxiosResponse) => {
      return res.data.data.total_rows;
    }).catch((err: any) => {
      catchError(err, null, "getReview");
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
