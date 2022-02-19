import React, { useEffect, useState } from "react";
import * as SC from "./login.style";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import { BiLoaderCircle } from "react-icons/bi";
import { Icon } from "@chakra-ui/react";
import { getCustomer, login, reset } from "../../services/services";
import { useDispatch } from "react-redux";
import {
  setCustomer,
  setIsLogged,
  setToken,
} from "../../redux/ducks/auth/auth";
import ls from "localstorage-slim";
import { useNavigate } from "react-router-dom";
import { setStorageItem } from "../../utils/storage";

type Error = {
  code?: string;
  message?: string;
  status?: string;
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRecovery, setShowRecovery] = useState(false);
  const [email, setEmail] = useState("");
  const [emailReset, setEmailReset] = useState("");
  const [password, setPass] = useState("");
  const [isLoginLoading, setLoginLoading] = useState(false);
  const [isResetLoading, setResetLoading] = useState(false);
  const [isGoogleLoading, setGoogleLoading] = useState(false);
  const [isFBLoading, setLFBloading] = useState(false);
  const [errorLogin, setErrorLogin] = useState<Error>();
  const [errorReset, setErrorReset] = useState<Error>();
  const [recoveryResponse, setRecoveryResponse] = useState();

  const handleGetCustomer = (accessToken: any) => {
    getCustomer(accessToken)
      .then((res) => {
        dispatch(setCustomer(res));
        dispatch(setIsLogged(true));
        setLoginLoading(false);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const handleLogin = (email: string, password: string) => {
    setLoginLoading(true);
    setStorageItem("pwd", password);
    login(email, password)
      .then((res) => {
        dispatch(setToken(res));
        handleGetCustomer(res.access_token);
        setStorageItem("tkn", res.access_token);
      })
      .catch((err) => {
        setLoginLoading(false);
        setErrorLogin(err.response.data);
      });
  };

  const handleReset = (email: string) => {
    setResetLoading(true);
    reset(email)
      .then((res) => {
        setResetLoading(false);
        setRecoveryResponse(res.message);
      })
      .catch((err) => {
        setResetLoading(false);
        setErrorReset(err.response.data);
      });
  };

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
                onChange={(e) => setEmail(e.target.value)}
              />
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PasswordWrap>
                <SC.PassWordInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  nav-index="2"
                  placeholder="Senha"
                  onChange={(e) => setPass(e.target.value)}
                />
                <Icon
                  as={showPassword ? IoEyeOffSharp : IoEyeSharp}
                  onClick={() => setShowPassword(!showPassword)}
                  fontSize="24px"
                  style={{ cursor: "pointer" }}
                />
              </SC.PasswordWrap>
            </SC.InputContainer>
            {errorLogin && <SC.Error>{errorLogin?.message}</SC.Error>}
            <SC.BtnLogin onClick={() => handleLogin(email, password)}>
              {isLoginLoading ? (
                <SC.SpinnerBox>
                  <Icon
                    as={BiLoaderCircle}
                    fontSize="24px"
                    style={{ color: "#FFFFFF" }}
                  />
                </SC.SpinnerBox>
              ) : (
                <SC.BtnTxt>Entrar</SC.BtnTxt>
              )}
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
                onChange={(e) => setEmailReset(e.target.value)}
              />
            </SC.InputContainer>
            {errorReset && <SC.Error>{errorReset?.message}</SC.Error>}
            {recoveryResponse && (
              <SC.RecoveryResponse>{recoveryResponse}</SC.RecoveryResponse>
            )}
            <SC.BtnLogin onClick={() => handleReset(emailReset)}>
              {isResetLoading ? (
                <SC.SpinnerBox>
                  <Icon
                    as={BiLoaderCircle}
                    fontSize="24px"
                    style={{ color: "#FFFFFF" }}
                  />
                </SC.SpinnerBox>
              ) : (
                <SC.BtnTxt>Resetar senha</SC.BtnTxt>
              )}
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
