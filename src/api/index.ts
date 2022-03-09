import axios, {
  AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse,
} from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const APP_TOKEN = process.env.REACT_APP_TOKEN || 'herman-app-token';
const USER_TOKEN = process.env.REACT_APP_USER_TOKEN || 'herman-app-user-token';
const APP_TOKEN_EXP = process.env.REACT_APP_TOKEN_EXP || 'herman-app-token-expiration';

const getAppToken = async () => {
  try {
    const { data }: any = await instance.post('/authorization/token', `client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&grant_type=${process.env.REACT_APP_CLIENT_GRANT_TYPE}`);

    localStorage.setItem(APP_TOKEN, data.access_token);
    localStorage.setItem(APP_TOKEN_EXP, data['.expires']);
  } catch (error) {
    console.log(error);
    // handle error
    // TODO: retry
  }
};

const getSavedToken = () => localStorage.getItem(APP_TOKEN);

if (!getSavedToken()) getAppToken();

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const newConfig: any = {
    ...config,
  };

  if (newConfig?.headers) {
    newConfig.headers.Authorization = `Bearer ${getSavedToken()}`;
    newConfig.headers.User_token = localStorage.getItem(USER_TOKEN);
  }

  return newConfig;
};
const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);
const onResponse = (response: AxiosResponse): AxiosResponse => response?.data || response;
const onResponseError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error?.response || error);

const setInterceptors = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export default setInterceptors(instance);

// TODO: refresh token
