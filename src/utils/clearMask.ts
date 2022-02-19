export const clearMask = (inputValue: any) => {
    return inputValue.replace(/[^\d]+/g, '');
  };