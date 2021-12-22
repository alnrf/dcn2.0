import React, { useState, useEffect } from "react";
import * as SC from "./stepper.style";
import { Icon } from "@chakra-ui/react";
import { MdCheck, MdOutlineClose } from "react-icons/md";

function Stepper({ status }: any) {
  const [stepOneDone, setStepOneDone] = useState(false);
  const [stepTwoDone, setStepTwoDone] = useState(false);
  const [stepThreeDone, setStepThreeDone] = useState(false);
  const [stepFourDone, setStepFourDone] = useState(false);
  const [stepFiveDone, setStepFiveDone] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);

  useEffect(() => {
    if (status === "CREATED") {
      setStepOneDone(true);
    }
    if (status === "CONFIRMED") {
      setStepOneDone(true);
      setStepTwoDone(true);
    }
    if (status === "PREPARING") {
      setStepOneDone(true);
      setStepTwoDone(true);
      setStepThreeDone(true);
    }
    if (status === "DELIVERING") {
      setStepOneDone(true);
      setStepTwoDone(true);
      setStepThreeDone(true);
      setStepFourDone(true);
    }
    if (status === "COMPLETED") {
      setStepOneDone(true);
      setStepTwoDone(true);
      setStepThreeDone(true);
      setStepFourDone(true);
      setStepFiveDone(true);
    }
    if (status === "CANCELED") {
      setStepOneDone(false);
      setStepTwoDone(false);
      setStepThreeDone(false);
      setStepFourDone(false);
      setStepFiveDone(false);
      setIsCanceled(true);
    }
  }, []);

  return (
    <>
      {!isCanceled ? (
        <SC.Container>
          <SC.WrapStep>
            <SC.Row>
              <SC.DummyLine />
              <SC.Box>
                <SC.Circle isDone={stepOneDone}>
                  {stepOneDone ? (
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
              <SC.DynamicLine isDone={stepOneDone} />
            </SC.Row>
            <SC.StepText>Recebido</SC.StepText>
          </SC.WrapStep>
          <SC.WrapStep>
            <SC.Row>
              <SC.DynamicLine isDone={stepTwoDone} />
              <SC.Box>
                <SC.Circle isDone={stepTwoDone}>
                  {stepTwoDone ? (
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
              <SC.DynamicLine isDone={stepTwoDone} />
            </SC.Row>
            <SC.StepText>Confirmado</SC.StepText>
          </SC.WrapStep>
          <SC.WrapStep>
            <SC.Row>
              <SC.DynamicLine isDone={stepThreeDone} />
              <SC.Box>
                <SC.Circle isDone={stepThreeDone}>
                  {stepThreeDone ? (
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
              <SC.DynamicLine isDone={stepThreeDone} />
            </SC.Row>
            <SC.StepText>Preparando</SC.StepText>
          </SC.WrapStep>
          <SC.WrapStep>
            <SC.Row>
              <SC.DynamicLine isDone={stepFourDone} />
              <SC.Box>
                <SC.Circle isDone={stepFourDone}>
                  {stepFourDone ? (
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
              <SC.DynamicLine isDone={stepFourDone} />
            </SC.Row>
            <SC.StepText>Saiu para entrega</SC.StepText>
          </SC.WrapStep>
          <SC.WrapStep>
            <SC.Row>
              <SC.DynamicLine isDone={stepFiveDone} />
              <SC.Box>
                <SC.Circle isDone={stepFiveDone}>
                  {stepFiveDone ? (
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
