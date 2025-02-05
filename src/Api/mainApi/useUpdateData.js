import baseURL from "./baseURL"

// Update data with image
const useUpdateDataWithImage = async (url, params) => {
    const config={
      headers:{"Content-Type":"multipart/form-data"}
  };
  
    const response = await baseURL.post(url, params, config);
    console.log(response.status)
    return response;
  };
  
  // Update data without image
  const useUpdateData= async (url, params) => {
  
    const response = await baseURL.post(url, params);
    console.log(response.status)
    return response;
  };
  
  export { useUpdateData, useUpdateDataWithImage};
  