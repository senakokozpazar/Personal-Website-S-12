import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {

    const storedValue = localStorage.getItem(key);

    if (storedValue === null) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } else {
      return JSON.parse(storedValue);
    }
  });

  const setLocalStorage = (newValue) => {
 
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorage];
}