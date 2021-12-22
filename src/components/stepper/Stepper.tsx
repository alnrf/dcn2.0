import React, { useState, useEffect } from "react";
import * as SC from "./stepper.style";
import { Icon } from "@chakra-ui/react";
import { MdCheck } from "react-icons/md";

function Stepper({ status }: any) {
  const [stepOneDone, setStepOneDone] = useState(false);
  const [stepTwoDone, setStepTwoDone] = useState(false);
  const [stepThreeDone, setStepThreeDone] = useState(false);
  const [stepFourDone, setStepFourDone] = useState(false);
  const [stepFiveDone, setStepFiveDone] = useState(false);

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
  }, []);

  return (
    <SC.Container>
      <SC.WrapStep>
        <SC.Row>
          <SC.DummyLine />
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
          <SC.DynamicLine isDone={stepOneDone} />
        </SC.Row>
        <SC.StepText>Recebido</SC.StepText>
      </SC.WrapStep>
      <SC.WrapStep>
        <SC.Row>
          <SC.DynamicLine isDone={stepTwoDone} />
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
          <SC.DynamicLine isDone={stepTwoDone} />
        </SC.Row>
        <SC.StepText>Confirmado</SC.StepText>
      </SC.WrapStep>
      <SC.WrapStep>
        <SC.Row>
          <SC.DynamicLine isDone={stepThreeDone} />
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
          <SC.DynamicLine isDone={stepThreeDone} />
        </SC.Row>
        <SC.StepText>Preparando</SC.StepText>
      </SC.WrapStep>
      <SC.WrapStep>
        <SC.Row>
          <SC.DynamicLine isDone={stepFourDone} />
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
          <SC.DynamicLine isDone={stepFourDone} />
        </SC.Row>
        <SC.StepText>Saiu para entrega</SC.StepText>
      </SC.WrapStep>
      <SC.WrapStep>
        <SC.Row>
          <SC.DynamicLine isDone={stepFiveDone} />
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
          <SC.DummyLine />
        </SC.Row>
        <SC.StepText>Finalizado</SC.StepText>
      </SC.WrapStep>
    </SC.Container>
  );
}

export default Stepper;
