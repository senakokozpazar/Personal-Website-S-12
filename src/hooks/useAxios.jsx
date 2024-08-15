import { useState } from 'react';
import axios from 'axios';

export const REQ_TYPES = Object.freeze({
  GET:"get",
  POST:"post",
  PUT:"put",
  DELETE:"delete",
});

const useAxios = (initialState) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const axiosInstance = axios.create({
    baseURL: 'https://reqres.in/api',
    timeout: 5000,
  });

  const doRequest = ({reqType, endpoint, payload, config}) => {
    setLoading(true);

    return axiosInstance[reqType](endpoint, payload, config)
      .then((response) => {
        return setData(response.data);
      })
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(()=> setLoading(false));
  };

  return [doRequest, data, loading, error];
};

export default useAxios;
