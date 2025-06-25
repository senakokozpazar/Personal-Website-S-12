import { useState } from 'react';
import axios from 'axios';

export const REQ_TYPES = Object.freeze({
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
});

const useAxios = (initialState) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const axiosInstance = axios.create({
    baseURL: 'https://reqres.in/api',
    timeout: 5000,
  });

  // İstek yapılmadan önce header’a API key eklemek için interceptor ekle
  axiosInstance.interceptors.request.use((config) => {
    config.headers['x-api-key'] = 'reqres-free-v1';
    return config;
  });

  const doRequest = ({ reqType, endpoint, payload, config = {} }) => {
    setLoading(true);

    // config objesini üzerine yazmadan birleştir
    const finalConfig = {
      ...config,
      headers: {
        ...(config.headers || {}),
        'x-api-key': 'reqres-free-v1',
      },
    };

    return axiosInstance[reqType](endpoint, payload, finalConfig)
      .then((response) => {
        setData(response.data);
        return response.data;
      })
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  return [doRequest, data, loading, error];
};

export default useAxios;
