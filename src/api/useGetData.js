import bUrl from "../api/base-URL";

const useGetData = async (url, params) => {
  const response = await bUrl.get(url, params);
  return response;
};

export default useGetData;
