import React, { useState } from "react";
import { View, StatusBar, FlatList } from "react-native";
import AppLoading from "expo-app-loading";
import styled from "styled-components";
import * as Font from "expo-font";
import AddInput from "./AddInput";
import TodoList from "./TodoList";
import Header from "./Header";
import Empty from "./Empty";

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });


export default function TodoContainer() {
const [fontsLoaded, setFontsLoaded] = useState(false);
 const [data, setData] = useState([]);
 const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  if (fontsLoaded) {
    return (
      <ComponentContainer>
        <View>
          <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
        </View>

        <View>
          <FlatList
            data={data}
            ListHeaderComponent={() => <Header />}
            ListEmptyComponent={() => <Empty />}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <TodoList item={item} deleteItem={deleteItem} />}
          />
          <View>
            <AddInput submitHandler={submitHandler} />
          </View>
        </View>
      </ComponentContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}

const ComponentContainer = styled.View`
  background-color: #ffffff;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;