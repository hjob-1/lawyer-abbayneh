import axios from "axios";

export const AxiosInstanceCreator = (token = "123", params = " ") => {
  let splited;
  if (params) {
    splited = params.split("=");
  }
  console.log(splited);
  const instance = axios.create({
    baseURL: `https://www.server.abbaylaw.com/api/`,
    headers: { token: `bearer ${token}` },
    params: {
      [splited[0]]: splited[1],
    },
  });
  return instance;
};
