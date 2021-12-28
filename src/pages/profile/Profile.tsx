import React, { useState } from "react";
import * as SC from "./profile.style";
import ProfileMenu from "../../components/profileMenu/ProfileMenu";
import AddressCard from "../../components/addressCard/AddressCard";

import data from "../../utils/mocks/addresses.json";

function Profile() {
  const [isCpf, setIsCpf] = useState(true);
  const [isAddressFormOpen, setAddressFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = ({ city_id }: any) => {
    if (city_id === selectedItem) {
      setSelectedItem(null);
    } else {
      setSelectedItem(city_id);
    }
  };

  return (
    <SC.Container>
      <ProfileMenu page="profile" />
      <SC.ProfileContainer>
        <SC.Title>Meu perfil</SC.Title>
        <SC.Advice>Mantenha sempre seus dados atualizados.</SC.Advice>
        <SC.SubTitle>Cadastro</SC.SubTitle>
        <SC.FormContainer>
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
              </SC.Row>
              <SC.Row>
                <SC.InputContainer style={{ marginRight: "8px" }}>
                  <SC.Label>CPF</SC.Label>
                  <SC.Input type="text" name="cpf" nav-index="3" />
                  <SC.Error>Informe seu CPF.</SC.Error>
                </SC.InputContainer>
                <SC.InputContainer style={{ marginLeft: "8px" }}>
                  <SC.Label>Telefone para contato</SC.Label>
                  <SC.Input type="text" name="phone" nav-index="4" />
                  <SC.Error>Informe seu telefone.</SC.Error>
                </SC.InputContainer>
              </SC.Row>
              <SC.Row>
                <SC.InputContainer style={{ marginRight: "8px" }}>
                  <SC.Label>E-mail</SC.Label>
                  <SC.Input type="e-mail" name="email" nav-index="5" />
                  <SC.Error>Informe seu e-mail.</SC.Error>
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
            </>
          )}
          <SC.ButtonSave>Salvar</SC.ButtonSave>
        </SC.FormContainer>
        <SC.FieldRow>
          <SC.SubTitle>Endereço de entrega</SC.SubTitle>
          <SC.AddAddressBtn
            onClick={() => setAddressFormOpen(!isAddressFormOpen)}
          >
            + Adicionar endereço
          </SC.AddAddressBtn>
        </SC.FieldRow>
        <SC.FormContainer>
          <SC.CardRow>
            {data.addresses.map((item: any, index: any) => (
              <SC.Card
                key={index}
                style={{
                  borderColor:
                    selectedItem === item?.city_id ? "#144c8b" : "#d8d8d8",
                }}
                onClick={() => handleSelect(item)}
              >
                <SC.AddressName>{item?.title}</SC.AddressName>
                <SC.AddressText>{`${item?.street_name}, ${item?.number} - ${item?.complement}`}</SC.AddressText>
                <SC.AddressText>{`${item?.zipcode} - ${item?.city}/${item?.state}`}</SC.AddressText>
              </SC.Card>
            ))}
          </SC.CardRow>

          {isAddressFormOpen && (
            <>
              <SC.Row>
                <SC.InputContainer style={{ marginRight: "8px" }}>
                  <SC.Label>Identificação do endereço</SC.Label>
                  <SC.Input
                    type="text"
                    name="title"
                    placeholder="Ex.: Casa, Trabalho..."
                    nav-index="1"
                  />
                  <SC.Error>Informe uma identificação.</SC.Error>
                </SC.InputContainer>
                <SC.InputContainer style={{ marginLeft: "8px" }}>
                  <SC.Label>CEP</SC.Label>
                  <SC.Input
                    type="text"
                    name="zipcode"
                    placeholder="00.000-000"
                    nav-index="2"
                  />
                  <SC.Error>Informe o CEP.</SC.Error>
                </SC.InputContainer>
              </SC.Row>
              <SC.InputContainer>
                <SC.Label>Rua/Logradouro</SC.Label>
                <SC.Input type="text" name="street_name" nav-index="3" />
                <SC.Error>Informe o seu endereço.</SC.Error>
              </SC.InputContainer>
              <SC.Row>
                <SC.InputContainer style={{ marginRight: "8px" }}>
                  <SC.Label>Número</SC.Label>
                  <SC.Input type="text" name="state" nav-index="4" />
                  <SC.Error>Informe o número da sua casa.</SC.Error>
                </SC.InputContainer>
                <SC.InputContainer style={{ marginLeft: "8px" }}>
                  <SC.Label>Bairro</SC.Label>
                  <SC.Input type="text" name="city" nav-index="5" />
                  <SC.Error>Informe seu bairro.</SC.Error>
                </SC.InputContainer>
              </SC.Row>
              <SC.InputContainer>
                <SC.Label>Complemento</SC.Label>
                <SC.Input type="text" name="complement" nav-index="6" />
              </SC.InputContainer>
              <SC.Row>
                <SC.InputContainer style={{ marginRight: "8px" }}>
                  <SC.Label>Cidade</SC.Label>
                  <SC.Input type="text" name="city" nav-index="7" />
                  <SC.Error>Informe sua cidade.</SC.Error>
                </SC.InputContainer>
                <SC.InputContainer style={{ marginLeft: "8px" }}>
                  <SC.Label>Estado</SC.Label>
                  <SC.Input type="text" name="state" nav-index="8" />
                  <SC.Error>Informe o estado.</SC.Error>
                </SC.InputContainer>
              </SC.Row>
            </>
          )}
          <SC.ButtonSave>Salvar</SC.ButtonSave>
        </SC.FormContainer>
      </SC.ProfileContainer>
    </SC.Container>
  );
}

export default Profile;
