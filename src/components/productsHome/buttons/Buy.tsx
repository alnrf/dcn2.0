import React from "react";

interface Actions {
  buyAction: any;
}

const Buy: React.FC<Actions> = ({ buyAction }) => {
  return <div onClick={buyAction}>Comprar +</div>;
};

export default Buy;
