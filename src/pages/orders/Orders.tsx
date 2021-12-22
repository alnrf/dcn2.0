import React, { useState, useEffect } from "react";
import * as SC from "./orders.style";
import ProfileMenu from "../../components/profileMenu/ProfileMenu";
import Stepper from "../../components/stepper/Stepper";
import { getOrderStatus } from "../../utils/getOrderStatus";
import { formatDate, formatTime } from "../../utils/formatDateAndTime";
import orders from "../../utils/mocks/orders.json";
import order from "../../utils/mocks/order.json";
import { toCurrency } from "../../utils/formatMoney";

function Orders() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = ({ id }: any) => {
    if (id === selectedItem) {
      setSelectedItem(null);
    } else {
      setSelectedItem(id);
    }
  };

  const getPaymentMethod = (method: string) => {
    switch (method) {
      case "CARD_CREDIT":
        return "Crédito";
      case "CARD_DEBIT":
        return "Débito";
      case "MONEY":
        return "Dinheiro";
    }
  };

  return (
    <SC.Container>
      <ProfileMenu page="orders" />
      <SC.MyOrdersContainer>
        <SC.Title>
          <span>Meus pedidos</span>
        </SC.Title>
        {orders?.map((item: any) => (
          <SC.MyOrderCard
            key={item?.id}
            style={{
              borderColor:
                selectedItem === item?.id ? "#144c8b" : "transparent",
            }}
            onClick={() => handleSelect(item)}
          >
            <SC.CardHeader>
              <SC.Order>
                Pedido:<SC.OrderNumber>{`#${item?.nr}`}</SC.OrderNumber>
              </SC.Order>
              <SC.Status status={item?.status}>
                {getOrderStatus(item?.status)}
              </SC.Status>
            </SC.CardHeader>
            <SC.OrderInfo>
              <SC.Row>
                <SC.MyOrderText>Data do pedido:</SC.MyOrderText>
                <SC.MyOrderText>{formatDate(item?.created_at)}</SC.MyOrderText>
              </SC.Row>
              <SC.Row>
                <SC.MyOrderText>Horário de entrega:</SC.MyOrderText>
                <SC.Col>
                  <SC.MyOrderText>
                    {formatDate(item?.delivery_date_max)}
                  </SC.MyOrderText>
                  <SC.MyOrderText>{`${formatTime(
                    item?.delivery_date_min
                  )} - ${formatTime(item?.delivery_date_max)}`}</SC.MyOrderText>
                </SC.Col>
              </SC.Row>
              <SC.Row>
                <SC.MyOrderTextBold>Valor total:</SC.MyOrderTextBold>
                <SC.MyOrderTextBold>{`R$ ${toCurrency(
                  item?.total_amount
                )}`}</SC.MyOrderTextBold>
              </SC.Row>
            </SC.OrderInfo>
          </SC.MyOrderCard>
        ))}
      </SC.MyOrdersContainer>
      <SC.OrderDetailContainer>
        <SC.DetailHeader>
          <span>Detalhe do pedido</span>
        </SC.DetailHeader>
        <SC.InfoWrap>
          <SC.AddressAndPayment>
            <SC.DetailTextBold>Endereço de entrega</SC.DetailTextBold>
            <SC.DetailTextBoldGray>
              {order?.address?.title}
            </SC.DetailTextBoldGray>
            <SC.AddressWrap>
              <SC.DetailText>
                {order?.address?.street_name}
                {", "}
                {order?.address?.number}
                {order?.address?.complement
                  ? ` - ${order?.address?.complement}`
                  : ""}
              </SC.DetailText>
              <SC.DetailText>
                {order?.address?.neighbor}
                {" - "}
                {order?.address?.city}
              </SC.DetailText>
              <SC.DetailText>{order?.address?.state}</SC.DetailText>
            </SC.AddressWrap>
            <SC.DetailTextBold>Forma de Pagamento</SC.DetailTextBold>
            <SC.DetailText>
              {getPaymentMethod(order?.payment?.payment_mode)}

              {order?.payment?.payment_mode !== "MONEY"
                ? ` - ${order?.payment?.card_brand}`
                : ""}
            </SC.DetailText>
          </SC.AddressAndPayment>
          <SC.Prices>
            <SC.Row>
              <SC.ResumeValuesText style={{ color: "#77798c" }}>
                Subtotal
              </SC.ResumeValuesText>
              <SC.ResumeValuesText
                style={{ color: "#0d1136" }}
              >{`R$ ${toCurrency(
                order?.subtotal_amount
              )}`}</SC.ResumeValuesText>
            </SC.Row>
            <SC.Row>
              <SC.ResumeValuesText style={{ color: "#77798c" }}>
                Desconto
              </SC.ResumeValuesText>
              <SC.ResumeValuesText
                style={{ color: "#0d1136" }}
              >{`R$ ${toCurrency(
                order?.discount_amount
              )}`}</SC.ResumeValuesText>
            </SC.Row>
            <SC.Row>
              <SC.ResumeValuesText style={{ color: "#77798c" }}>
                Troco para
              </SC.ResumeValuesText>
              <SC.ResumeValuesText
                style={{ color: "#0d1136" }}
              >{`R$ ${toCurrency(
                order?.payment?.change_amount
              )}`}</SC.ResumeValuesText>
            </SC.Row>
            <SC.Row>
              <SC.ResumeValuesText style={{ color: "#77798c" }}>
                Taxa de entrega
              </SC.ResumeValuesText>
              <SC.ResumeValuesText
                style={{ color: "#0d1136" }}
              >{`R$ ${toCurrency(
                order?.delivery_fee_amount
              )}`}</SC.ResumeValuesText>
            </SC.Row>
            <SC.Row>
              <SC.DetailTextBold>Total</SC.DetailTextBold>
              <SC.DetailTextBold style={{ color: "#0d1136" }}>{`R$ ${toCurrency(
                order?.total_amount
              )}`}</SC.DetailTextBold>
            </SC.Row>
          </SC.Prices>
        </SC.InfoWrap>
        <SC.StepperContainer>
          <Stepper status={order?.status} />
        </SC.StepperContainer>
        <SC.ProductTableHeader>
          <SC.ProductTitleItem>Itens</SC.ProductTitleItem>
          <SC.ProductTitleQttyPrice>Quantidade</SC.ProductTitleQttyPrice>
          <SC.ProductTitleQttyPrice>Preço</SC.ProductTitleQttyPrice>
        </SC.ProductTableHeader>
        <SC.ProductList>
          {order?.products?.map((item: any) => (
            <SC.ProductWrapRow key={item?.id}>
              <SC.ProductWrapItem>
                <SC.ProductImage
                  src={`http://poa01.datacubo.net:3030/${item?.image}`}
                />
                <SC.WrapCol>
                  <SC.DetailTextBold>{item?.title}</SC.DetailTextBold>
                  <SC.DetailText>
                    {item?.stock_unity} {item?.quantity_type}
                  </SC.DetailText>
                  <SC.MyOrderText>{`R$ ${toCurrency(
                    item?.amount
                  )}`}</SC.MyOrderText>
                </SC.WrapCol>
              </SC.ProductWrapItem>
              <SC.ProductWrapQttyPrice>
                {item?.quantity}
              </SC.ProductWrapQttyPrice>
              <SC.ProductWrapQttyPrice>{`R$ ${toCurrency(
                item?.total_amount
              )}`}</SC.ProductWrapQttyPrice>
            </SC.ProductWrapRow>
          ))}
        </SC.ProductList>
        <SC.ButtonContainer>
          {order?.status !== "DELIVERING" && order?.status !== "COMPLETED" && (
            <SC.Button>
              <span>Solicitar Cancelamento</span>
            </SC.Button>
          )}
        </SC.ButtonContainer>
      </SC.OrderDetailContainer>
    </SC.Container>
  );
}

export default Orders;
