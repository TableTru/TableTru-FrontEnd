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
    return res.data.data.rows;
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
    return res.data.data;
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

export const createOpenTime = async (data: any) => {
  console.log(data);
  return await axios.post(url + '/opentimes/', data).then((res: AxiosResponse) => {
    return res;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
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

export const checkStoreByName = async (storeName: string) => {
  return await axios.get(url + `/stores/checkStoreByName?storeName=${storeName}`).then((res: AxiosResponse) => {
    return res.data.success;
  }).catch((err: any) => {
    catchError(err, null, "getUser");
    return [];
  });
}

export const GetStoreImageByType = async (id: number, imageType: string) => {
  return await axios.get(url + `/storeImages/GetStoreImageByType?id=${id}&imageType=${imageType}`).then((res: AxiosResponse) => {
    return res.data.data.rows;
  }).catch((err: any) => {
    catchError(err, null, "getUser");
    return [];
  });
}

export const GetStoreImage = async (id: number) => {
  return await axios.get(url + `/storeImages/GetStoreImageByType?id=${id}`).then((res: AxiosResponse) => {
    return res.data.data.rows;
  }).catch((err: any) => {
    catchError(err, null, "getUser");
    return [];
  });
}

export const getStorePreview = async () => {
  return await axios.get(url + '/stores/getStorePreview').then((res: AxiosResponse) => {
    return res.data;
  }).catch((err: any) => {
    catchError(err, null, "getStore");
    return [];
  });
}

export const createStoreImage = async (data: any) => {
  console.log(data);
  return await axios.post(url + '/storeImages/', data).then((res: AxiosResponse) => {
    return res;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const deleteStoreImage = async (id: number) => {
  return await axios.delete(url + `/storeImages/${id}`).then((res: AxiosResponse) => {
    return res.data;
  }).catch((err: { response: { data: any; }; }) => {
    console.log("err: ", err.response);
    return err?.response?.data ? err?.response?.data : {};
  });
}

export const searchSortRating = async (data: any) => {
  return await axios.get(url + '/stores/SearchStoreSortRating/', data).then((res: AxiosResponse) => {
    return res.data.data.rows;
  }).catch((err: any) => {
    catchError(err, null, "getStore");
    return [];
  });
}

export const searchSortLocation = async (data: any) => {
  return await axios.get(url + '/stores/SearchStoreSortDistance/', data).then((res: AxiosResponse) => {
    return res.data.data.rows;
  }).catch((err: any) => {
    catchError(err, null, "getStore");
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
