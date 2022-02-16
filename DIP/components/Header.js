import React from "react";
import styled from "styled-components";

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
  return (
    <ComponentContainer>
      <HeaderText>TODO.</HeaderText>
      <HeaderList>{today}</HeaderList>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  height: 60px;
  background-color: #F2F2F2;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: #000000;
  font-family: poppins-bold;
  margin-left: 20px;
  font-size: 20px;
`;

const HeaderList = styled.Text`
  color: #000000;
  font-family: poppins-bold;
  font-size: 16px;
  margin-right: 20px;
`;