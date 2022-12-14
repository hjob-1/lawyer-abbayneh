import { AxiosInstanceCreator } from "./axios";

export const fetchApi = async (url, token, params, method, values) => {
  try {
    const Axios = AxiosInstanceCreator(token, params);
    let data;

    switch (method) {
      case "GET":
        data = await Axios.get(url);
        break;
      case "POST":
        data = await Axios.post(url, values);
        break;
      case "DELETE":
        data = await Axios.delete(url);
        break;
      case "PUT":
        data = await Axios.put(url, values);
        break;

      default:
        break;
    }
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
