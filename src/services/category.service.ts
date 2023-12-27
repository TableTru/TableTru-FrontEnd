import axios, { AxiosResponse } from "axios";

const url = "http://localhost:8000";

interface Category {
    id: number
    name: string
    imageName: string
    createAt: Date
    updateAt: Date
}

export const getTest = async () => {
    return await axios.get('https://www.melivecode.com/api/attractions').then((res: AxiosResponse) => {
      return res;
    }).catch((err: any) => {
      catchError(err, null, "getCategory");
      return [];
    });
  }

export const getCategory = async () => {
  return await axios.get(url + '/categories/').then((res: AxiosResponse) => {
    return res.data.data;
  }).catch((err: any) => {
    catchError(err, null, "getCategory");
    return [];
  });
}

export const createCategory = async (data: any): Promise<any> => {
  return await axios.post(url + '/categories/', data).then((res: AxiosResponse) => {
    return res.data;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const editCategory = async (data: any): Promise<any> => {
  return await axios.put(url + '/categories/', data).then((res: AxiosResponse) => {
    // console.log("res", res);
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
