import React from "react";
import * as SC from "./stepper.style";
import { Icon } from "@chakra-ui/react";
import { MdCheck, MdOutlineClose } from "react-icons/md";

function Stepper({ status }: any) {
  const getStep = (status: any) => {
    switch (status) {
      case "CREATED":
        return 1;
      case "CONFIRMED":
        return 2;
      case "PREPARING":
        return 3;
      case "DELIVERING":
        return 4;
      case "COMPLETED":
        return 5;
      case "CANCELED":
        return 6;
      default:
        return 0;
    }
  };

  return (
    <>
      {status !== "CANCELED" ? (
        <SC.Container>
          <SC.WrapStep>
            <SC.Row>
              <SC.DummyLine />
              <SC.Box>
                <SC.Circle actualStep={getStep(status)} compareStep={0}>
                  {getStep(status) > 0 ? (
                    <Icon
                      as={MdCheck}
                      fontWeight="normal"
                      color="#FFFFFF"
                      fontSize="20"
                    />
                  ) : (
                    <SC.CircleText>1</SC.CircleText>
                  )}
                </SC.Circle>
              </SC.Box>
              <SC.DynamicLine actualStep={getStep(status)} compareStep={0} />
            </SC.Row>
            <SC.StepText>Recebido</SC.StepText>
          </SC.WrapStep>
          <SC.WrapStep>
            <SC.Row>
              <SC.DynamicLine actualStep={getStep(status)} compareStep={1} />
              <SC.Box>
                <SC.Circle actualStep={getStep(status)} compareStep={1}>
                  {getStep(status) > 1 ? (
                    <Icon
                      as={MdCheck}
                      fontWeight="normal"
                      color="#FFFFFF"
                      fontSize="20"
                    />
                  ) : (
                    <SC.CircleText>2</SC.CircleText>
                  )}
                </SC.Circle>
              </SC.Box>
              <SC.DynamicLine actualStep={getStep(status)} compareStep={1} />
            </SC.Row>
            <SC.StepText>Confirmado</SC.StepText>
          </SC.WrapStep>
          <SC.WrapStep>
            <SC.Row>
              <SC.DynamicLine actualStep={getStep(status)} compareStep={2} />
              <SC.Box>
                <SC.Circle actualStep={getStep(status)} compareStep={2}>
                  {getStep(status) > 2 ? (
                    <Icon
                      as={MdCheck}
                      fontWeight="normal"
                      color="#FFFFFF"
                      fontSize="20"
                    />
                  ) : (
                    <SC.CircleText>3</SC.CircleText>
                  )}
                </SC.Circle>
              </SC.Box>
              <SC.DynamicLine actualStep={getStep(status)} compareStep={2} />
            </SC.Row>
            <SC.StepText>Preparando</SC.StepText>
          </SC.WrapStep>
          <SC.WrapStep>
            <SC.Row>
              <SC.DynamicLine actualStep={getStep(status)} compareStep={3} />
              <SC.Box>
                <SC.Circle actualStep={getStep(status)} compareStep={3}>
                  {getStep(status) > 3 ? (
                    <Icon
                      as={MdCheck}
                      fontWeight="normal"
                      color="#FFFFFF"
                      fontSize="20"
                    />
                  ) : (
                    <SC.CircleText>4</SC.CircleText>
                  )}
                </SC.Circle>
              </SC.Box>
              <SC.DynamicLine actualStep={getStep(status)} compareStep={3} />
            </SC.Row>
            <SC.StepText>Saiu para entrega</SC.StepText>
          </SC.WrapStep>
          <SC.WrapStep>
            <SC.Row>
              <SC.DynamicLine actualStep={getStep(status)} compareStep={4} />
              <SC.Box>
                <SC.Circle actualStep={getStep(status)} compareStep={4}>
                  {getStep(status) > 4 ? (
                    <Icon
                      as={MdCheck}
                      fontWeight="normal"
                      color="#FFFFFF"
                      fontSize="20"
                    />
                  ) : (
                    <SC.CircleText>5</SC.CircleText>
                  )}
                </SC.Circle>
              </SC.Box>
              <SC.DummyLine />
            </SC.Row>
            <SC.StepText>Finalizado</SC.StepText>
          </SC.WrapStep>
        </SC.Container>
      ) : (
        <SC.Container>
          <SC.WrapStep>
            <SC.Row>
              <SC.Box>
                <SC.CircleRed>
                  <Icon
                    as={MdOutlineClose}
                    fontWeight="normal"
                    color="#FFFFFF"
                    fontSize="20"
                  />
                </SC.CircleRed>
              </SC.Box>
            </SC.Row>
            <SC.StepText>Cancelado</SC.StepText>
          </SC.WrapStep>
        </SC.Container>
      )}
    </>
  );
}

export default Stepper;
