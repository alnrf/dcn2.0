export const setStorageItem = (key: any, value:any) => {
    const payload = JSON.stringify(value);
    window.sessionStorage.setItem(key, payload);
  };
  
 export const getStorageItem = (key:any) => {
    const result = window.sessionStorage.getItem(key);
    return result 
  };
  
 export const removeStorageItem = (key:any) => {
    window.sessionStorage.removeItem(key);
  };