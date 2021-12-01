import React from 'react';
export const EyeShowHide = ({
  visible = true,
  width = '20px',
  height = '20px',
}) => {
  return (
    visible ? 
      (<svg width={width} height={height} data-baseweb="icon" viewBox="0 0 20 20"><title>Exibir</title><path d="M.2 10a11 11 0 0119.6 0A11 11 0 01.2 10zm9.8 4a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"></path></svg>)
    :
      (<svg width={width} height={height} data-baseweb="icon" viewBox="0 0 20 20"><title>Ocultar</title><path d="M12.81 4.36l-1.77 1.78a4 4 0 00-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0112.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 01-12.62 5.64l1.77-1.78a4 4 0 004.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"></path></svg>)
  );
};
