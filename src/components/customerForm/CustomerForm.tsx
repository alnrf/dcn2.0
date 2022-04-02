import React, { useState } from "react";
import * as SC from "./customer.style";

import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";
import { CustomerProps } from "./Interface";

function CustomerForm() {
  const [isCpf, setIsCpf] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerProps>({
    birthdate: "",
    document_number: "",
    email_address: "",
    full_name: "",
    password: "",
    phone_number: "",
    social_name: "",
  });

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
              <SC.InputField
                type="text"
                name="first_name"
                nav-index="1"
                value={customerInfo.full_name}
                variant="outline"
                onChange={(e: any) =>
                  setCustomerInfo({
                    ...customerInfo,
                    full_name: e.target.value,
                  })
                }
              />
            </SC.InputContainer>
          </SC.Row>
          <SC.Row>
            <SC.InputContainer style={{ marginRight: "8px" }}>
              <SC.Label>CPF</SC.Label>
              <SC.InputField
                type="text"
                name="cpf"
                nav-index="2"
                value={customerInfo.document_number}
                variant="outline"
                onChange={(e: any) =>
                  setCustomerInfo({
                    ...customerInfo,
                    document_number: e.target.value,
                  })
                }
              />
            </SC.InputContainer>
            <SC.InputContainer style={{ marginLeft: "8px" }}>
              <SC.Label>Telefone para contato</SC.Label>
              <SC.InputField
                type="text"
                name="phone"
                nav-index="3"
                value={customerInfo.phone_number}
                variant="outline"
                onChange={(e: any) =>
                  setCustomerInfo({
                    ...customerInfo,
                    phone_number: e.target.value,
                  })
                }
              />
            </SC.InputContainer>
          </SC.Row>
          <SC.InputContainer>
            <SC.Label>E-mail</SC.Label>
            <SC.InputField
              type="e-mail"
              name="email"
              nav-index="4"
              value={customerInfo.email_address}
              variant="outline"
              onChange={(e: any) =>
                setCustomerInfo({
                  ...customerInfo,
                  email_address: e.target.value,
                })
              }
            />
          </SC.InputContainer>
          <SC.Row>
            <SC.InputContainer style={{ marginRight: "8px" }}>
              <SC.Label>Senha</SC.Label>
              <SC.PasswordWrap>
                <SC.InputField
                  type={showPassword ? "text" : "password"}
                  name="password"
                  nav-index="5"
                  value={customerInfo.password}
                  onChange={(e: any) =>
                    setCustomerInfo({
                      ...customerInfo,
                      password: e.target.value,
                    })
                  }
                />
                <Icon
                  as={showPassword ? IoEyeOffSharp : IoEyeSharp}
                  onClick={() => setShowPassword(!showPassword)}
                  fontSize="20px"
                  style={{ cursor: "pointer", marginLeft: "8px" }}
                />
              </SC.PasswordWrap>
            </SC.InputContainer>
            <SC.InputContainer style={{ marginLeft: "8px" }}>
              <SC.Label>Data de nascimento</SC.Label>
              <SC.InputField
                type="date"
                name="birthdate"
                nav-index="6"
                value={customerInfo.birthdate}
                variant="outline"
                onChange={(e: any) =>
                  setCustomerInfo({
                    ...customerInfo,
                    birthdate: e.target.value,
                  })
                }
              />
            </SC.InputContainer>
          </SC.Row>
        </>
      ) : (
        <>
          <SC.InputContainer>
            <SC.Label>Nome fantasia</SC.Label>
            <SC.InputField
              type="text"
              name="fantasy_name"
              nav-index="1"
              value={customerInfo.full_name}
              variant="outline"
              onChange={(e: any) =>
                setCustomerInfo({
                  ...customerInfo,
                  full_name: e.target.value,
                })
              }
            />
          </SC.InputContainer>
          <SC.InputContainer>
            <SC.Label>Razão social</SC.Label>
            <SC.InputField
              type="text"
              name="fantasy_name"
              nav-index="2"
              value={customerInfo.social_name}
              variant="outline"
              onChange={(e: any) =>
                setCustomerInfo({
                  ...customerInfo,
                  social_name: e.target.value,
                })
              }
            />
          </SC.InputContainer>
          <SC.Row>
            <SC.InputContainer style={{ marginRight: "8px" }}>
              <SC.Label>CNPJ</SC.Label>
              <SC.InputField
                type="text"
                name="cnpj"
                nav-index="3"
                value={customerInfo.document_number}
                variant="outline"
                onChange={(e: any) =>
                  setCustomerInfo({
                    ...customerInfo,
                    document_number: e.target.value,
                  })
                }
              />
            </SC.InputContainer>
            <SC.InputContainer style={{ marginLeft: "8px" }}>
              <SC.Label>Telefone para contato</SC.Label>
              <SC.InputField
                type="text"
                name="phone"
                nav-index="4"
                value={customerInfo.phone_number}
                variant="outline"
                onChange={(e: any) =>
                  setCustomerInfo({
                    ...customerInfo,
                    phone_number: e.target.value,
                  })
                }
              />
            </SC.InputContainer>
          </SC.Row>
          <SC.InputContainer style={{ marginRight: "8px" }}>
            <SC.Label>Defina sua senha.</SC.Label>
            <SC.PasswordWrap>
              <SC.PassWordInput
                type={showPassword ? "text" : "password"}
                name="password"
                nav-index="5"
                style={{ width: "49%", marginRight: "8px" }}
                value={customerInfo.password}
                onChange={(e: any) =>
                  setCustomerInfo({
                    ...customerInfo,
                    password: e.target.value,
                  })
                }
              />
              <Icon
                as={showPassword ? IoEyeOffSharp : IoEyeSharp}
                onClick={() => setShowPassword(!showPassword)}
                fontSize="24px"
                style={{ cursor: "pointer" }}
              />
            </SC.PasswordWrap>
          </SC.InputContainer>
        </>
      )}
    </SC.Container>
  );
}

export default CustomerForm;
