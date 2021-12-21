import React from "react";
import * as SC from "./profileMenu.style";
import { Link } from "react-router-dom";

function ProfileMenu({ page }: any) {
  return (
    <SC.Container>
      <SC.MenuContainer>
        <Link to="/meus-pedidos/">
          <SC.MenuItem
            style={{ borderLeftColor: page === "orders" ? "#134B8B" : "#fff" }}
          >
            <span>Meus pedido</span>
          </SC.MenuItem>
        </Link>
        <Link to="/perfil/">
          <SC.MenuItem
            style={{ borderLeftColor: page === "profile" ? "#134B8B" : "#fff" }}
          >
            <span>Perfil</span>
          </SC.MenuItem>
        </Link>
        <Link to="/ajuda/">
          <SC.MenuItem style={{ borderLeftColor: "#fff" }}>
            <span>Ajuda</span>
          </SC.MenuItem>
        </Link>
      </SC.MenuContainer>
      <SC.Logout>
        <span>Sair</span>
      </SC.Logout>
    </SC.Container>
  );
}

export default ProfileMenu;
