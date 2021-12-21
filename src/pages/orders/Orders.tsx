import React from "react";
import * as SC from "./orders.style";
import ProfileMenu from "../../components/profileMenu/ProfileMenu";
import { getOrderStatus } from "../../utils/getOrderStatus";
import { formatDate, formatTime } from "../../utils/formatDateAndTime";
import orders from "../../utils/mocks/orders.json";
import { toCurrency } from "../../utils/formatMoney";

function Orders() {
  return (
    <SC.Container>
      <ProfileMenu page="orders" />
      <SC.MyOrdersContainer>
        <SC.MyOrderTitle>
          <span>Meus pedidos</span>
        </SC.MyOrderTitle>
        {orders.orders.map((item: any) => (
          <SC.MyOrderCard key={item?.uuid}>
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
                <SC.Text>Data do pedido:</SC.Text>
                <SC.Text>{formatDate(item?.created_at)}</SC.Text>
              </SC.Row>
              <SC.Row>
                <SC.Text>Horário de entrega:</SC.Text>
                <SC.Col>
                  <SC.Text>{formatDate(item?.delivery_date_max)}</SC.Text>
                  <SC.Text>{`${formatTime(
                    item?.delivery_date_min
                  )} - ${formatTime(item?.delivery_date_max)}`}</SC.Text>
                </SC.Col>
              </SC.Row>
              <SC.Row>
                <SC.TextBold>Valor total:</SC.TextBold>
                <SC.TextBold>{`R$ ${toCurrency(
                  item?.total_amount
                )}`}</SC.TextBold>
              </SC.Row>
            </SC.OrderInfo>
          </SC.MyOrderCard>
        ))}
      </SC.MyOrdersContainer>
      <SC.OrderDetailContainer></SC.OrderDetailContainer>
    </SC.Container>
  );
}

export default Orders;
