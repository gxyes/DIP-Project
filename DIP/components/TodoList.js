import React from "react";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

export default function TodoList({ item, deleteItem }) {
  return (
    <ComponentContainer>
      <ListContainer>
        <CirlceContainer>
          <Entypo name="circle" size={10} color="#F0EDE9" />
        </CirlceContainer>
        <View>
          <TextItem>{item.value}</TextItem>
          <TextDate> Task</TextDate>
        </View>
        <IconContainer onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="#F0EDE9" />
        </IconContainer>
      </ListContainer>
    </ComponentContainer>
  );
}

const ListContainer = styled.TouchableOpacity`
  background-color: #8696A7;
  height: auto;
  width: 350px;
  margin-bottom: 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

const TextItem = styled.Text`
  color: black;
  width: 260px;
  height: auto;
  font-size: 14px;
  margin-top: 10px;
  margin-right: 20px;
  font-family: poppins-regular;
`;

const TextDate = styled.Text`
  color: #F0EDE9;
  font-size: 12px;
  margin-right: 20px;
  font-family: poppins-regular;
  border-radius: 10px;
  width: 40px;
`;

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-top: 8px;
  height: 50px;
  border-radius: 10px;
`;

const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;