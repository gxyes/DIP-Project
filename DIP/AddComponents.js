import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState } from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View, Button,
   Dimensions, Image, Platform, LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from "react-native-modalbox";import { NavigationContainer } from '@react-navigation/native';

//Required imports for database
import {useEffect} from "react";
import {db} from './firebase_config';
import {collection, getDocs, addDoc, doc, deleteDoc} from 'firebase/firestore';

// ignore warning for constantly refreshing view
LogBox.ignoreLogs(['Setting a timer for a long period of time'])

import AddEvent from './AddEvent';
import AddDeadline from './AddDeadline';
import AddTask from './AddTask';
import AddCategory from './AddCategory';

function AddComponents( {navigation} ) {

  return (

    <SafeAreaView>
      {/* <View>
        <Text
          style={styles.Title}>
          Adding Components
        </Text>
      </View> */}
      <View style={styles.HeaderBorder}/>

      {/* content */}

      <TouchableOpacity onPress={() => navigation.navigate("Add Category")}>
        <Text style={styles.AddPagesHeader}>+ Add Category</Text>
      </TouchableOpacity>
      <View style={styles.AddPagesBorder}/>

      <TouchableOpacity onPress={() => navigation.navigate("Add Event")}>
        <Text style={styles.AddPagesHeader}>+ Add Event</Text>
      </TouchableOpacity>
      {/* <Text
        style={styles.Description}>
        No Event
      </Text> */}
      <View style={styles.AddPagesBorder}/>

      <TouchableOpacity onPress={() => navigation.navigate("Add Deadline")}>
        <Text style={styles.AddPagesHeader}>+ Add Deadline</Text>
      </TouchableOpacity>
      {/* <Button onPress={() => navigation.navigate("Add Deadline")} title="Add Deadline" /> */}
      <View style={styles.AddPagesBorder}/>

      <TouchableOpacity onPress={() => navigation.navigate("Add Task")}>
        <Text style={styles.AddPagesHeader}>+ Add Task</Text>
      </TouchableOpacity>
      <View style={styles.AddPagesBorder}/>

    </SafeAreaView>
  );
};

function AddEventScreen() {
  return (
    <AddEvent/>
  )
}

function AddDeadlineScreen() {
  return (
    <AddDeadline/>
  )
}

function AddTaskScreen() {
  return (
    <AddTask/>
  )
}

function AddCategoryScreen() {
  return (
    <AddComponents/>
  )
}

const Stack = createStackNavigator()

export default function ComponentStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Components" component={AddComponents} />
      <Stack.Screen name="Add Category" component={AddCategory} />
      <Stack.Screen name="Add Event" component={AddEventScreen} />
      <Stack.Screen name="Add Deadline" component={AddDeadlineScreen} />
      <Stack.Screen name="Add Task" component={AddTaskScreen} />
    </Stack.Navigator>
  )
};


const styles = StyleSheet.create({
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#979797',
    borderRadius: 8,
  },
  Heading: {
    height: 20,
    margin: 12,
    marginBottom: -10,
    fontWeight: 'bold',
  },
  AddPagesHeader: {
    height: 20,
    margin: 12,
    color: '#5F5DA6',
    fontWeight: 'bold',
  },
  AddPagesBorder: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginRight: 12,
    marginLeft: 12,
    marginTop: -5,
  },
  HeaderBorder: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
  },
  // Description: {
  //   height: 20,
  //   alignItems: 'center',
  //   color: '#C4C4C4',
  // },
  Title: {
    height: 20,
    margin:12,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5F5DA6',
  },
  saveButton: {
    margin: 13,
    height: 35,
    marginTop: 25,
    backgroundColor: '#5F5DA6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBox: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "transparent"
  },
  modalScroll:{
    marginTop: 500,
    overflow: "hidden",
    textAlign: "left",
    alignItems:"flex-start",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    paddingLeft:15,
    paddingBottom:15,
    flex: 1,
    height: 100,
    backgroundColor: "white"
  },
  content: {
    position: "absolute",
    bottom: 0,
    // height: verticalScale(250),
    height: 200,
    borderTopLeftRadius: 15,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 15,
    borderTopRightRadius: 15,
    backgroundColor: "white"
  },
  textStyle: {
    fontSize: 22
  },
  buttonStyle:{
    alignItems: 'flex-start',
    flexDirection: 'row',
    color: '#000',
    fontSize: 20,
    //fontWeight: "bold",
    padding: 10
  },
  closeButtonStyle:{
    alignItems: 'flex-start',
    color: '#6568A6',
    fontSize: 16,
    //fontWeight: "bold",
    padding: 10,
  }
});

