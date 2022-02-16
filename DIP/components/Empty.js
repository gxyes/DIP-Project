import React from "react";
import styled from "styled-components";

export default function Empty() {
  return (
    <ComponentContainer>
      <EmptyImage
        source={require("../assets/mountain.png")}
      />
      <EmptyText>Create Your TODO List...</EmptyText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 650px;
`;

const EmptyImage = styled.Image`
  width: 220px;
  height: 220px;
`;

const EmptyText = styled.Text`
  color: #000000;
  font-family: poppins-bold;
  margin-top: 30px;
  font-size: 20px;
`;