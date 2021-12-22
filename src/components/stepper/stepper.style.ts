import styled from "styled-components";

type StepProps = {
    isDone: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
`;

export const Circle = styled.div<StepProps>`
display: flex;
width: 36px;
height: 36px;
align-items: center;
justify-content: center;
border-radius: 50%;
border-width: 2px;
background-color: ${({ isDone }) => (isDone ? '#134B8B' : '#FFFFFF')};
border-style: ${({ isDone }) => (isDone ? 'solid' : 'dotted')};
border-color: ${({ isDone }) => (isDone ? 'transparent' : '#134B8B')};
`;

export const CircleText = styled.span`
font-size: 13px;
line-height: 20px;
font-style: normal;
font-weight: 700;
color: #134b8b;
`;

export const Row = styled.div`
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const DummyLine = styled.div`
display: flex;
width: 80%;
flex-direction: row;
border-bottom-style: solid;
border-bottom-width: 3px;
border-bottom-color: #fff;
`;

export const DynamicLine = styled.div<StepProps>`
display: flex;
width: 80%;
flex-direction: row;
border-bottom-style: solid;
border-bottom-width: 3px;
border-bottom-color: ${({ isDone }) => (isDone ? '#134B8B' : '#E6E6E6')};

`;

export const WrapStep = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const StepText = styled.span`
  font-size: 15px;
  font-style: normal;
  line-height: 23px;
  font-weight: 700;
  color: #0d1136;
`;
