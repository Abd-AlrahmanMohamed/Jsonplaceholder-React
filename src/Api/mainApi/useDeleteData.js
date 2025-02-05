import baseURL from "./baseURL"

const useDeleteData = async (url, parmas) => {
    const res = await baseURL.delete(url, parmas);
    return res.data;
}

export default useDeleteData;