import baseURL from "./baseURL"

// Add data with image
const useAddDataWithImage = async (url, params) => {
    const config={
      headers:{"Content-Type":"multipart/form-data"}
  };
  
    const response = await baseURL.post(url, params, config);
    console.log(response.status)
    return response;
  };
  
  // Add data without image
  const useAddData= async (url, params) => {
  
    const response = await baseURL.post(url, params);
    console.log(response.status)
    return response;
  };
  
  export { useAddData, useAddDataWithImage};
  