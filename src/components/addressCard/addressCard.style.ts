import styled from "styled-components";
import { Icon } from "@chakra-ui/react";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding: 8px;
  background-color: #fff;
  margin: 21px 0 0 0;
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  width: 250px;
  flex-direction: column;
  padding: 16px;
  background-color: #f4f9ff;
  border-radius: 6px;
  margin: 0 16px 0 0;
  border-style: solid;
  border-width: 1px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
`;

export const AddressName = styled.span`
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  color: #0d1136;
`;

export const AddressText = styled.span`
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: #424561;
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ActionEdit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #134B8B;
  border-radius: 50%;
  cursor: pointer;
  padding: 4px;
`;

export const ActionDelete = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #FF5B60;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0 0 4px;
  padding: 4px;
`;

export const IconAction = styled(Icon)`
color: #FFF;
font-size: 12px;

`;


