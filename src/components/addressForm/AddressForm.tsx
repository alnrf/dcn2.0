import React from "react";
import * as SC from "./addressForm.style";

function AddressForm() {
  return (
    <SC.Container>
      <SC.Title>
        <span>Adicionar Endereço</span>
      </SC.Title>
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
      <SC.Button>
        <span>Salvar endereço</span>
      </SC.Button>
    </SC.Container>
  );
}

export default AddressForm;
