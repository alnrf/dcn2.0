import React, { useEffect, useState } from "react";
import * as SC from "./checkout.style";

import AddressCard from "../../components/addressCard/AddressCard";
import AddressForm from "../../components/addressForm/AddressForm";
import DeliveryCard from "../../components/deliveryCard/DeliveryCard";
import CustomerForm from "../../components/customerForm/CustomerForm";
import Payment from "../../components/payment/Payment";
import CartResume from "../../components/cartResume/CartResume";
import { ScheduleProps } from "./Interface";
import { checkProducts, getDeliverySchedule } from "../../services/services";

function Checkout() {
  const [isAddressFormOpen, setAddressFormOpen] = useState(false);
  const [schedule, setSchedule] = useState<ScheduleProps>();
  const [scheduleSelected, setScheduleSelected] = useState("");

  useEffect(() => {
    getDeliverySchedule("3")
      .then((res: any) => {
        setSchedule(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
    checkProducts("6,12")
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }, []);

  return (
    <SC.Container>
      <SC.StepsContainer>
        <SC.Step>
          <SC.AddressWrap>
            <SC.TitleContainer>
              <SC.Circle>1</SC.Circle>
              <SC.Title>Endereço de entrega</SC.Title>
            </SC.TitleContainer>
            <SC.AddAddressBtn
              onClick={() => setAddressFormOpen(!isAddressFormOpen)}
            >
              <SC.AddressIconBtn>+</SC.AddressIconBtn>
              <SC.AddressTxtBtn>Adicionar endereço</SC.AddressTxtBtn>
            </SC.AddAddressBtn>
          </SC.AddressWrap>
          <AddressCard
            onDelete={() => alert("delete")}
            onEdit={() => alert("Edit")}
          />
          {isAddressFormOpen && <AddressForm />}
        </SC.Step>
        <SC.Step>
          <SC.TitleContainer>
            <SC.Circle>2</SC.Circle>
            <SC.Title>Agendamento de entrega</SC.Title>
          </SC.TitleContainer>
          <DeliveryCard
            schedule={schedule}
            onSelect={(id: any) => setScheduleSelected(id)}
          />
        </SC.Step>
        <SC.Step>
          <SC.TitleContainer>
            <SC.Circle>3</SC.Circle>
            <SC.Title>Cadastro</SC.Title>
          </SC.TitleContainer>
          <CustomerForm />
        </SC.Step>
        <SC.Step>
          <SC.TitleContainer>
            <SC.Circle>4</SC.Circle>
            <SC.Title>Pague na entrega</SC.Title>
          </SC.TitleContainer>
          <Payment />
        </SC.Step>
      </SC.StepsContainer>
      <CartResume />
    </SC.Container>
  );
}

export default Checkout;
