import axios from "axios";

export const handlePromise = (promise) => {
  return promise.then((data) => [null, data]).catch((err) => [err]);
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

const request = async (method, path, payload, headers = {}, options = {}) => {
  let optionsHeaders = { ...headers };
  const accessToken = sessionStorage.getItem("accessToken");

  if (accessToken) {
    optionsHeaders = {
      Authorization: `Bearer ${accessToken}`,
      ...optionsHeaders,
    };
  }

  const customOptions = {
    method,
    headers: optionsHeaders,
    url: path,
    params: null,
    data: null,
    ...options,
  };

  if (payload) {
    if (payload.params) {
      customOptions.params = payload.params;
    } else {
      customOptions.data = payload;
    }
  }

  try {
    const { data } = await axiosInstance.request(customOptions);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

const get = async (path, payload, headers, options?) =>
  await request("GET", path, payload, headers, options);
const post = async (path, payload, headers, options?) =>
  await request("POST", path, payload, headers, options);

axiosInstance.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.replace("/");
    }
  }
);

export default { handlePromise, get, post };
