import { createContext, useEffect } from "react";
import useAxios, { REQ_TYPES } from "../hooks/useAxios";
import { texts } from "../mocks/texts"; 

export const DataContext = createContext();

const DataContextProvider = ({children}) => {
  const [doRequest, data, error] = useAxios([]);

  useEffect(()=>{
    doRequest({reqType: REQ_TYPES.POST, endpoint:'', payload: texts });
  }, []);


  return (
    <DataContext.Provider value={{data}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
export default DataContextProvider;