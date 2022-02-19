import React, { useEffect, useState } from "react";
import * as SC from "./profile.style";
import ProfileMenu from "../../components/profileMenu/ProfileMenu";

import AddressCard from "../../components/addressCard/AddressCard";
import useDocumentTitle from "../../utils/hooks/useDocumentTitle";
import { useDispatch, useSelector } from "react-redux";
import InputMask from "react-input-mask";
import { Icon, Input } from "@chakra-ui/react";
import {
  deleteAddress,
  getCustomer,
  getZipCode,
  updateCustomer,
  addAddress,
} from "../../services/services";
import { setCustomer, setIsLogged } from "../../redux/ducks/auth/auth";
import { getStorageItem } from "../../utils/storage";
import { MdSearch } from "react-icons/md";
import { clearMask } from "../../utils/clearMask";
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
  const [fullName, setFullName] = useState<string | undefined>();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [documentType, setDocumentType] = useState();
  const [documentNumber, setDocumentNumber] = useState();
  const [birthDate, setBirthDate] = useState();
  const [legalName, setLegalName] = useState();
  const [responseMessage, setResponseMessage] = useState();
  const [isEditing, setIsEditing] = useState(false);

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

  const resetForm = () => {
    setAddressList({
      ...addressList,
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
  };

  const handleBuscaCEP = () => {
    getZipCode(clearMask(addressList.zipcode)).then((res) => {
      setAddressList({
        ...addressList,
        street_name: res.street_name,
        neighbor: res.neighbor,
        city: res.city,
        city_id: res.city_id,
        state: res.state,
        state_id: res.state_id,
      });
    });
  };

  const handleUpdateCustomer = () => {
    let payload = {
      first_name: fullName?.split(" ")[0],
      last_name: fullName?.split(" ").slice(-1).join(" "),
      social_name: legalName,
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

  const handleAddAddress = () => {
    let payload = {
      title: addressList.title,
      zipcode: clearMask(addressList.zipcode),
      street_name: addressList.street_name,
      number: addressList.number,
      complement: addressList.complement,
      neighbor: addressList.neighbor,
      city: addressList.city,
      city_id: addressList.city_id,
      state: addressList.state,
      state_id: addressList.state_id,
      lat: 0,
      lng: 0,
    };
    addAddress(payload, authToken)
      .then((res) => {
        getCustomer(authToken)
          .then((res) => {
            dispatch(setCustomer(res));
            dispatch(setIsLogged(true));
          })
          .catch((err) => console.error(err));
        resetForm();
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateAddress = () => {
    let payload = {
      title: addressList.title,
      zipcode: clearMask(addressList.zipcode),
      street_name: addressList.street_name,
      number: addressList.number,
      complement: addressList.complement,
      neighbor: addressList.neighbor,
      city: addressList.city,
      city_id: addressList.city_id,
      state: addressList.state,
      state_id: addressList.state_id,
      lat: 0,
      lng: 0,
    };
    addAddress(payload, authToken)
      .then((res) => {
        getCustomer(authToken)
          .then((res) => {
            dispatch(setCustomer(res));
            dispatch(setIsLogged(true));
          })
          .catch((err) => console.error(err));
        resetForm();
      })
      .catch((err) => console.error(err));
    setAddressFormOpen(false);
  };

  const handleEditItem = (id: any) => {
    let newArr = customerData.addresses.find((i: any) => i.id === id);
    setAddressList({
      ...addressList,
      title: newArr.title,
      zipcode: newArr.zipcode,
      street_name: newArr.street_name,
      number: newArr.number,
      complement: newArr.complement,
      neighbor: newArr.neighbor,
      city: newArr.city,
      city_id: newArr.city_id,
      state: newArr.state,
      state_id: newArr.state_id,
      lat: "",
      lng: "",
    });
    setIsEditing(true);
    setAddressFormOpen(true);
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
              onEdit={(id) => handleEditItem(id)}
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
                  value={addressList.title}
                  onChange={(e: any) =>
                    setAddressList({ ...addressList, title: e.target.value })
                  }
                />
              </SC.InputContainer>

              <SC.InputContainer>
                <SC.Label>CEP</SC.Label>
                <SC.RowCEP>
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
                      setAddressList({
                        ...addressList,
                        zipcode: e.target.value,
                      })
                    }
                  />
                  <SC.IconSearchDiv onClick={() => handleBuscaCEP()}>
                    <Icon as={MdSearch} color="#134b8b" fontSize="32px" />
                  </SC.IconSearchDiv>
                </SC.RowCEP>
              </SC.InputContainer>

              <SC.InputContainer>
                <SC.Label>Rua/Logradouro</SC.Label>
                <SC.InputField
                  variant="outline"
                  type="text"
                  name="street_name"
                  nav-index="3"
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
                    variant="outline"
                    type="text"
                    name="number"
                    nav-index="4"
                    value={addressList.number}
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
                    variant="outline"
                    type="text"
                    name="neighborhood"
                    nav-index="5"
                    value={addressList.neighbor}
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
                  variant="outline"
                  type="text"
                  name="complement"
                  nav-index="6"
                  value={addressList.complement}
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
                    variant="outline"
                    type="text"
                    name="city"
                    nav-index="7"
                    value={addressList.city}
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
                    variant="outline"
                    type="text"
                    name="state"
                    nav-index="8"
                    value={addressList.state}
                    onChange={(e: any) =>
                      setAddressList({
                        ...addressList,
                        state: e.target.value,
                      })
                    }
                  />
                </SC.InputContainer>
              </SC.Row>
            </>
          )}
          {(isEditing || isAddressFormOpen) && (
            <SC.ButtonSave
              onClick={() =>
                isEditing ? handleUpdateAddress() : handleAddAddress()
              }
            >
              Salvar
            </SC.ButtonSave>
          )}
        </SC.FormContainer>
      </SC.ProfileContainer>
    </SC.Container>
  );
}

export default Profile;
