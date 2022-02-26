import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as SC from "./addressForm.style";
import { AddressProps } from "./Interface";
import { Icon, Input } from "@chakra-ui/react";
import InputMask from "react-input-mask";

function AddressForm() {
  const authData = useSelector((data: any) => data.authStore.authInfo);
  const [addressList, setAddressList] = useState<AddressProps>({
    id: 0,
    uuid: "",
    title: "",
    zipcode: "",
    street_name: "",
    number: "",
    complement: "",
    neighbor: "",
    city: "",
    city_id: 0,
    state: "",
    state_id: 0,
    state_slug: "",
    lat: "",
    lng: "",
  });

  const authToken = authData.access_token;

  return (
    <SC.Container>
      <SC.Title>
        <span>Adicionar Endereço</span>
      </SC.Title>
      <SC.Row>
        <SC.InputContainer style={{ marginRight: "8px" }}>
          <SC.Label>Identificação do endereço</SC.Label>
          <SC.InputField
            type="text"
            name="title"
            placeholder="Ex.: Casa, Trabalho..."
            nav-index="1"
            value={addressList.title}
            onChange={(e: any) =>
              setAddressList({ ...addressList, title: e.target.value })
            }
          />
        </SC.InputContainer>
        <SC.InputContainer style={{ marginLeft: "8px" }}>
          <SC.Label>CEP</SC.Label>
          <Input
            as={InputMask}
            mask="**.***-***"
            variant="outline"
            type="text"
            name="zipcode"
            placeholder="Informe o CEP."
            nav-index="2"
            value={addressList.zipcode}
            onChange={(e: any) =>
              setAddressList({ ...addressList, zipcode: e.target.value })
            }
          />
        </SC.InputContainer>
      </SC.Row>
      <SC.InputContainer>
        <SC.Label>Rua/Logradouro</SC.Label>
        <SC.InputField
          type="text"
          name="street_name"
          nav-index="3"
          variant="outline"
          value={addressList.street_name}
          onChange={(e: any) =>
            setAddressList({
              ...addressList,
              street_name: e.target.value,
            })
          }
        />
      </SC.InputContainer>
      <SC.Row>
        <SC.InputContainer style={{ marginRight: "8px" }}>
          <SC.Label>Número</SC.Label>
          <SC.InputField
            type="text"
            name="state"
            nav-index="4"
            value={addressList.number}
            variant="outline"
            onChange={(e: any) =>
              setAddressList({
                ...addressList,
                number: e.target.value,
              })
            }
          />
        </SC.InputContainer>
        <SC.InputContainer style={{ marginLeft: "8px" }}>
          <SC.Label>Bairro</SC.Label>
          <SC.InputField
            type="text"
            name="city"
            nav-index="5"
            value={addressList.neighbor}
            variant="outline"
            onChange={(e: any) =>
              setAddressList({
                ...addressList,
                neighbor: e.target.value,
              })
            }
          />
        </SC.InputContainer>
      </SC.Row>
      <SC.InputContainer>
        <SC.Label>Complemento</SC.Label>
        <SC.InputField
          type="text"
          name="complement"
          nav-index="6"
          value={addressList.complement}
          variant="outline"
          onChange={(e: any) =>
            setAddressList({
              ...addressList,
              complement: e.target.value,
            })
          }
        />
      </SC.InputContainer>
      <SC.Row>
        <SC.InputContainer style={{ marginRight: "8px" }}>
          <SC.Label>Cidade</SC.Label>
          <SC.InputField
            type="text"
            name="city"
            nav-index="7"
            value={addressList.city}
            variant="outline"
            onChange={(e: any) =>
              setAddressList({
                ...addressList,
                city: e.target.value,
              })
            }
          />
        </SC.InputContainer>
        <SC.InputContainer style={{ marginLeft: "8px" }}>
          <SC.Label>Estado</SC.Label>
          <SC.InputField
            type="text"
            name="state"
            nav-index="8"
            value={addressList.state}
            variant="outline"
            onChange={(e: any) =>
              setAddressList({
                ...addressList,
                state: e.target.value,
              })
            }
          />
        </SC.InputContainer>
      </SC.Row>
      <SC.Button>
        <span>Salvar endereço</span>
      </SC.Button>
    </SC.Container>
  );
}

export default AddressForm;
