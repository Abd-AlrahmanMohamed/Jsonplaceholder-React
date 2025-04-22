import baseUrl from "./base-URL";

const useAddDataWithImage = async (url, params) => {
  const config={
    headers:{"Content-Type":"multipart/form-data"}
};

  const response = await baseUrl.post(url, params, config);
  console.log(response.status)
  return response;
};

const useAddData= async (url, params) => {

  const response = await baseUrl.post(url, params);
  console.log(response.status)
  return response;
};

export { useAddData, useAddDataWithImage};
