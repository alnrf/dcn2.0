import React, { useState } from "react";
import * as SC from "./customer.style";

import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";

function CustomerForm() {
  const [isCpf, setIsCpf] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SC.Container>
      <SC.Row>
        <SC.Button isCpf={isCpf} onClick={() => setIsCpf(true)}>
          Pessoa física - CPF
        </SC.Button>
        <SC.Button isCpf={!isCpf} onClick={() => setIsCpf(false)}>
          Pessoa jurídica - CNPJ
        </SC.Button>
      </SC.Row>
      {isCpf ? (
        <>
          <SC.Row>
            <SC.InputContainer style={{ marginRight: "8px" }}>
              <SC.Label>Nome</SC.Label>
              <SC.Input type="text" name="first_name" nav-index="1" />
              <SC.Error>Informe seu nome.</SC.Error>
            </SC.InputContainer>
            <SC.InputContainer style={{ marginLeft: "8px" }}>
              <SC.Label>Sobrenome</SC.Label>
              <SC.Input type="text" name="last_name" nav-index="1" />
              <SC.Error>Informe seu sobrenome.</SC.Error>
            </SC.InputContainer>
          </SC.Row>
          <SC.Row>
            <SC.InputContainer style={{ marginRight: "8px" }}>
              <SC.Label>CPF</SC.Label>
              <SC.Input type="text" name="cpf" nav-index="2" />
              <SC.Error>Informe seu CPF.</SC.Error>
            </SC.InputContainer>
            <SC.InputContainer style={{ marginLeft: "8px" }}>
              <SC.Label>Telefone para contato</SC.Label>
              <SC.Input type="text" name="phone" nav-index="3" />
              <SC.Error>Informe seu telefone.</SC.Error>
            </SC.InputContainer>
          </SC.Row>
          <SC.InputContainer>
            <SC.Label>E-mail</SC.Label>
            <SC.Input type="e-mail" name="email" nav-index="4" />
            <SC.Error>Informe seu e-mail.</SC.Error>
          </SC.InputContainer>
          <SC.Row>
            <SC.InputContainer style={{ marginRight: "8px" }}>
              <SC.Label>Senha</SC.Label>
              <SC.PasswordWrap style={{ width: "100%" }}>
                <SC.PassWordInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  nav-index="5"
                />
                <Icon
                  as={showPassword ? IoEyeOffSharp : IoEyeSharp}
                  onClick={() => setShowPassword(!showPassword)}
                  fontSize="24px"
                  style={{ cursor: "pointer" }}
                />
              </SC.PasswordWrap>
              <SC.Error>Informe uma senha.</SC.Error>
            </SC.InputContainer>
            <SC.InputContainer style={{ marginLeft: "8px" }}>
              <SC.Label>Data de nascimento</SC.Label>
              <SC.Input type="date" name="birthdate" nav-index="6" />
              <SC.Error>Informe a data de nascimento.</SC.Error>
            </SC.InputContainer>
          </SC.Row>
        </>
      ) : (
        <>
          <SC.InputContainer>
            <SC.Label>Nome fantasia</SC.Label>
            <SC.Input type="text" name="fantasy_name" nav-index="1" />
            <SC.Error>Informe o nome fantasia.</SC.Error>
          </SC.InputContainer>
          <SC.InputContainer>
            <SC.Label>Razão social</SC.Label>
            <SC.Input type="text" name="fantasy_name" nav-index="2" />
            <SC.Error>Informe a razão social.</SC.Error>
          </SC.InputContainer>
          <SC.Row>
            <SC.InputContainer style={{ marginRight: "8px" }}>
              <SC.Label>CNPJ</SC.Label>
              <SC.Input type="text" name="cnpj" nav-index="3" />
              <SC.Error>Informe o CNPJ.</SC.Error>
            </SC.InputContainer>
            <SC.InputContainer style={{ marginLeft: "8px" }}>
              <SC.Label>Telefone para contato</SC.Label>
              <SC.Input type="text" name="phone" nav-index="4" />
              <SC.Error>Informe seu telefone.</SC.Error>
            </SC.InputContainer>
          </SC.Row>
          <SC.InputContainer style={{ marginRight: "8px" }}>
            <SC.Label>Defina sua senha.</SC.Label>
            <SC.PasswordWrap style={{ width: "49%" }}>
              <SC.PassWordInput
                type={showPassword ? "text" : "password"}
                name="password"
                nav-index="5"
              />
              <Icon
                as={showPassword ? IoEyeOffSharp : IoEyeSharp}
                onClick={() => setShowPassword(!showPassword)}
                fontSize="24px"
                style={{ cursor: "pointer" }}
              />
            </SC.PasswordWrap>
            <SC.Error>Informe uma senha.</SC.Error>
          </SC.InputContainer>
        </>
      )}
    </SC.Container>
  );
}

export default CustomerForm;
