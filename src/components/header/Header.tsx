import React, { useEffect, useState } from "react";
import * as SC from "./header.style";
import Logo from "../../assets/logos/Superbom.png";
import SearchBar from "../../components/searchBar/SearchBar";
import { MdHelp } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const authData = useSelector((data: any) => data.authStore.customer);

  return (
    <>
      <SC.HeaderWrapper>
        <Link to="/">
          <SC.LogoBox>
            <SC.LogoImage src={Logo} alt="Superbom" />
          </SC.LogoBox>
        </Link>
        <SearchBar />
        <SC.LinkWrap>
          <SC.NavLink to="/ofertas">Ofertas</SC.NavLink>
          <SC.NavLink to="/ajuda">
            <Icon as={MdHelp} fontSize="xl" style={{ marginRight: "4px" }} />
            Ajuda
          </SC.NavLink>
          {!authData?.first_name ? (
            <SC.NavLink to="/login">
              <SC.Button>Entrar</SC.Button>
            </SC.NavLink>
          ) : (
            <SC.WrapUser onClick={() => setShowMenu(!showMenu)}>
              <Icon
                as={FaRegUserCircle}
                color="#8DAFD5"
                fontSize="xl"
                style={{ marginRight: "8px" }}
              />
              <SC.Greeting>
                Olá,<SC.Name>{authData?.first_name}</SC.Name>
              </SC.Greeting>
            </SC.WrapUser>
          )}
        </SC.LinkWrap>
        {showMenu && (
          <SC.MenuContainer>
            <SC.ButtonMenuLink to="/perfil/" onClick={() => setShowMenu(false)}>
              Perfil
            </SC.ButtonMenuLink>
            <SC.ButtonMenuLink
              to="/meus-pedidos/"
              onClick={() => setShowMenu(false)}
            >
              Meus pedidos
            </SC.ButtonMenuLink>
            <SC.ButtonMenu onClick={() => setShowMenu(false)}>
              Sair
            </SC.ButtonMenu>
          </SC.MenuContainer>
        )}
      </SC.HeaderWrapper>
    </>
  );
};

export default Header;
