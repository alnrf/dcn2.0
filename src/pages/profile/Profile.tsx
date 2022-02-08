import React, { useEffect, useState } from "react";
import * as SC from "./profile.style";
import ProfileMenu from "../../components/profileMenu/ProfileMenu";

import AddressCard from "../../components/addressCard/AddressCard";
import useDocumentTitle from "../../utils/hooks/useDocumentTitle";
import { useDispatch, useSelector } from "react-redux";
import InputMask from "react-input-mask";
import { Input } from "@chakra-ui/react";
import {
  deleteAddress,
  getCustomer,
  updateCustomer,
} from "../../services/services";
import { setCustomer, setIsLogged } from "../../redux/ducks/auth/auth";
import { getStorageItem } from "../../utils/storage";
interface AddressProps {
  id: number;
  uuid: string;
  title: string;
  zipcode: string;
  street_name: string;
  number: string;
  complement: string;
  neighbor: string;
  city: string;
  city_id: number;
  state: string;
  state_id: number;
  state_slug: string;
  lat: string;
  lng: string;
}

function Profile() {
  useDocumentTitle("Perfil - Superbom Supermercados - Bom estar com você");
  const dispatch = useDispatch();
  const storedPwd = getStorageItem("pwd");
  const [isAddressFormOpen, setAddressFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const authData = useSelector((data: any) => data.authStore.authInfo);
  const customerData = useSelector((data: any) => data.authStore.customer);
  const [addressList, setAddressList] = useState<AddressProps>();
  const [fullName, setFullName] = useState<string | undefined>();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [documentType, setDocumentType] = useState();
  const [documentNumber, setDocumentNumber] = useState();
  const [birthDate, setBirthDate] = useState();
  const [legalName, setLegalName] = useState();
  const [responseMessage, setResponseMessage] = useState();
  const authToken = authData.access_token;

  const handleSelect = ({ city_id }: any) => {
    if (city_id === selectedItem) {
      setSelectedItem(null);
    } else {
      setSelectedItem(city_id);
    }
  };

  const handleDeleteAddress = (id: number) => {
    deleteAddress(id, authToken)
      .then((res) => {
        setResponseMessage(res.message);
        getCustomer(authToken)
          .then((res) => {
            dispatch(setCustomer(res));
            dispatch(setIsLogged(true));
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateCustomer = () => {
    let payload = {
      first_name: fullName?.split(" ")[0],
      last_name: fullName?.split(" ").slice(-1).join(" "),
      email_address: email,
      phone_number: phone,
      document_number: documentNumber,
      birthdate: birthDate,
      password: storedPwd,
    };
    updateCustomer(payload, authToken)
      .then((res) => {
        dispatch(setCustomer(res));
        dispatch(setIsLogged(true));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (!customerData) {
      return;
    }
    setFullName(customerData?.full_name);
    setEmail(customerData?.email_address);
    setPhone(customerData?.phone_number);
    setDocumentType(customerData?.document_type);
    setDocumentNumber(customerData?.document_number);
    setBirthDate(customerData?.birthdate);
    setLegalName(customerData?.social_name);
  }, []);

  return (
    <SC.Container>
      <ProfileMenu page="profile" />
      <SC.ProfileContainer>
        <SC.Title>Meu perfil</SC.Title>
        <SC.Advice>Mantenha sempre seus dados atualizados.</SC.Advice>
        <SC.SubTitle>Cadastro</SC.SubTitle>
        <SC.FormContainer>
          {documentType === "CPF" || documentType === "" ? (
            <>
              <SC.Row>
                <SC.InputContainer style={{ marginRight: "8px" }}>
                  <SC.Label>Nome</SC.Label>
                  <SC.InputField
                    variant="outline"
                    type="text"
                    name="first_name"
                    nav-index="1"
                    value={fullName}
                    onChange={(e: any) => setFullName(e.target.value)}
                  />
                </SC.InputContainer>
              </SC.Row>
              <SC.Row>
                <SC.InputContainer style={{ marginRight: "8px" }}>
                  <SC.Label>CPF</SC.Label>
                  <Input
                    as={InputMask}
                    mask="***.***.***-**"
                    name="cpf"
                    id="cpf"
                    type="text"
                    nav-index="3"
                    value={documentNumber}
                    onChange={(e: any) => setDocumentNumber(e.target.value)}
                    variant="outline"
                    isDisabled
                  />
                </SC.InputContainer>
                <SC.InputContainer style={{ marginLeft: "8px" }}>
                  <SC.Label>Telefone para contato</SC.Label>
                  <Input
                    as={InputMask}
                    mask="(**)*****-****"
                    variant="outline"
                    type="text"
                    name="phone"
                    nav-index="4"
                    value={phone}
                    onChange={(e: any) => setPhone(e.target.value)}
                  />
                </SC.InputContainer>
              </SC.Row>
              <SC.Row>
                <SC.InputContainer style={{ marginRight: "8px" }}>
                  <SC.Label>E-mail</SC.Label>
                  <SC.InputField
                    isDisabled
                    variant="outline"
                    type="e-mail"
                    name="email"
                    nav-index="5"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                </SC.InputContainer>
                <SC.InputContainer style={{ marginLeft: "8px" }}>
                  <SC.Label>Data de nascimento</SC.Label>
                  <SC.InputField
                    variant="outline"
                    type="date"
                    name="birthdate"
                    nav-index="6"
                    value={birthDate}
                    onChange={(e: any) => setBirthDate(e.target.value)}
                  />
                </SC.InputContainer>
              </SC.Row>
            </>
          ) : (
            <>
              <SC.InputContainer>
                <SC.Label>Nome fantasia</SC.Label>
                <SC.InputField
                  variant="outline"
                  type="text"
                  name="fantasy_name"
                  nav-index="1"
                  value={fullName}
                  onChange={(e: any) => setFullName(e.target.value)}
                />
              </SC.InputContainer>
              {legalName && (
                <SC.InputContainer>
                  <SC.Label>Razão social</SC.Label>
                  <SC.InputField
                    variant="outline"
                    type="text"
                    name="legal_name"
                    nav-index="2"
                    value={legalName}
                    onChange={(e: any) => setLegalName(e.target.value)}
                  />
                </SC.InputContainer>
              )}

              <SC.Row>
                <SC.InputContainer style={{ marginRight: "8px" }}>
                  <SC.Label>CNPJ</SC.Label>
                  <Input
                    as={InputMask}
                    mask="**.***.***/****-**"
                    variant="outline"
                    type="text"
                    name="legal_number"
                    nav-index="3"
                    value={documentNumber}
                    onChange={(e: any) => setDocumentNumber(e.target.value)}
                  />
                </SC.InputContainer>
                <SC.InputContainer style={{ marginLeft: "8px" }}>
                  <SC.Label>Telefone para contato</SC.Label>
                  <Input
                    as={InputMask}
                    mask="(**)*****-****"
                    variant="outline"
                    type="text"
                    name="phone"
                    nav-index="4"
                    value={phone}
                    onChange={(e: any) => setPhone(e.target.value)}
                  />
                </SC.InputContainer>
              </SC.Row>
              <SC.InputContainer style={{ marginRight: "8px" }}>
                <SC.Label>E-mail</SC.Label>
                <SC.InputField
                  isDisabled
                  variant="outline"
                  type="e-mail"
                  name="email"
                  nav-index="5"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </SC.InputContainer>
            </>
          )}
          <SC.ButtonSave onClick={() => handleUpdateCustomer()}>
            Salvar
          </SC.ButtonSave>
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
            <AddressCard
              onDelete={(id) => handleDeleteAddress(id)}
              onEdit={() => alert("Edit")}
            />
          </SC.CardRow>

          {isAddressFormOpen && (
            <>
              <SC.InputContainer style={{ marginRight: "8px" }}>
                <SC.Label>Identificação do endereço</SC.Label>
                <SC.InputField
                  variant="outline"
                  type="text"
                  name="title"
                  placeholder="Ex.: Casa, Trabalho..."
                  nav-index="1"
                />
              </SC.InputContainer>
              <SC.Row>
                <SC.InputContainer style={{ marginLeft: "8px" }}>
                  <SC.Label>CEP</SC.Label>
                  <SC.InputField
                    variant="outline"
                    type="text"
                    name="zipcode"
                    placeholder="00.000-000"
                    nav-index="2"
                    max={8}
                  />
                  <SC.Error>Informe o CEP.</SC.Error>
                </SC.InputContainer>
              </SC.Row>
              <SC.InputContainer>
                <SC.Label>Rua/Logradouro</SC.Label>
                <SC.InputField
                  variant="outline"
                  type="text"
                  name="street_name"
                  nav-index="3"
                />
              </SC.InputContainer>
              <SC.Row>
                <SC.InputContainer style={{ marginRight: "8px" }}>
                  <SC.Label>Número</SC.Label>
                  <SC.InputField
                    variant="outline"
                    type="text"
                    name="state"
                    nav-index="4"
                  />
                </SC.InputContainer>
                <SC.InputContainer style={{ marginLeft: "8px" }}>
                  <SC.Label>Bairro</SC.Label>
                  <SC.InputField
                    variant="outline"
                    type="text"
                    name="city"
                    nav-index="5"
                  />
                </SC.InputContainer>
              </SC.Row>
              <SC.InputContainer>
                <SC.Label>Complemento</SC.Label>
                <SC.InputField
                  variant="outline"
                  type="text"
                  name="complement"
                  nav-index="6"
                />
              </SC.InputContainer>
              <SC.Row>
                <SC.InputContainer style={{ marginRight: "8px" }}>
                  <SC.Label>Cidade</SC.Label>
                  <SC.InputField
                    variant="outline"
                    type="text"
                    name="city"
                    nav-index="7"
                  />
                </SC.InputContainer>
                <SC.InputContainer style={{ marginLeft: "8px" }}>
                  <SC.Label>Estado</SC.Label>
                  <SC.InputField
                    variant="outline"
                    type="text"
                    name="state"
                    nav-index="8"
                  />
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
