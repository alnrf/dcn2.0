import React, { useState } from "react";
import * as SC from "./login.style";

import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRecovery, setShowRecovery] = useState(false);

  return (
    <SC.Container>
      <SC.FormContainer>
        {!showRecovery ? (
          <>
            <SC.Title>Seja bem-vindo(a)</SC.Title>
            <SC.Text style={{ marginBottom: "30px" }}>
              Entre com seu e-mail e senha
            </SC.Text>
            <SC.InputContainer>
              <SC.Input
                type="e-mail"
                name="email"
                nav-index="1"
                placeholder="E-mail"
              />
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PasswordWrap>
                <SC.PassWordInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  nav-index="2"
                  placeholder="Senha"
                />
                <Icon
                  as={showPassword ? IoEyeOffSharp : IoEyeSharp}
                  onClick={() => setShowPassword(!showPassword)}
                  fontSize="24px"
                  style={{ cursor: "pointer" }}
                />
              </SC.PasswordWrap>
            </SC.InputContainer>
            <SC.BtnLogin>
              <SC.BtnTxt>Entrar</SC.BtnTxt>
            </SC.BtnLogin>
            <SC.HDivider>
              <SC.HLine />
              <SC.Text>ou</SC.Text>
              <SC.HLine />
            </SC.HDivider>
            <SC.Btn style={{ backgroundColor: "#4267B2" }}>
              <Icon
                as={BsFacebook}
                color="#ffffff"
                fontSize="24px"
                style={{ marginRight: "8px" }}
              />
              <SC.BtnTxt>Continuar com Facebook</SC.BtnTxt>
            </SC.Btn>
            <SC.Btn style={{ backgroundColor: "#4285F4" }}>
              <Icon
                as={BsGoogle}
                color="#ffffff"
                fontSize="24px"
                style={{ marginRight: "8px" }}
              />
              <SC.BtnTxt>Continuar com Google</SC.BtnTxt>
            </SC.Btn>
            <SC.Text>
              Faça seu <strong>cadastro</strong> no checkout ao realizar seu
              primeiro pedido.
            </SC.Text>
            <SC.HDivider>
              <SC.HLine />
            </SC.HDivider>
            <SC.Recovery>
              <SC.Text>
                Esqueceu sua senha?
                <SC.Link onClick={() => setShowRecovery(!showRecovery)}>
                  Resetar
                </SC.Link>
              </SC.Text>
            </SC.Recovery>
          </>
        ) : (
          <>
            <SC.Title>Esqueci minha senha</SC.Title>
            <SC.Text style={{ marginBottom: "30px" }}>
              Nós vamos enviar um link para o seu e-mail para que você possa
              resetar sua senha.
            </SC.Text>
            <SC.InputContainer>
              <SC.Input
                type="e-mail"
                name="email"
                nav-index="1"
                placeholder="E-mail"
              />
            </SC.InputContainer>
            <SC.BtnLogin>
              <SC.BtnTxt>Resetar senha</SC.BtnTxt>
            </SC.BtnLogin>
            <SC.Recovery>
              <SC.Text>
                Voltar para o
                <SC.Link onClick={() => setShowRecovery(!showRecovery)}>
                  login
                </SC.Link>
              </SC.Text>
            </SC.Recovery>
          </>
        )}
      </SC.FormContainer>
    </SC.Container>
  );
}

export default Login;
