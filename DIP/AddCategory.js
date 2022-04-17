import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState } from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View, Button,
   Dimensions, Image, Platform, LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from "react-native-modalbox";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";

//Required imports for database
import {useEffect} from "react";
import {db} from './firebase_config';
import {collection, getDocs, addDoc, doc, deleteDoc} from 'firebase/firestore';

// ignore warning for constantly refreshing view
LogBox.ignoreLogs(['Setting a timer for a long period of time'])

function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const AddCategory = () => {
  // navigation const
  const navigation = useNavigation();

  // base const
  const [newName, setNewName] = useState("");
  const [newAddInfo, setNewAddInfo] = useState("");

  // additional firebase stuff
  const [category, setCategories] = useState([]);
  const categoryCollectionRef = collection(db, "Category");

  // datetimepicker const
  const [mode,setMode]= useState('newDate');
  const [show,setShow]= useState(false);
  const [newDate, setNewDate]= useState(new Date(Date.now()));
  const [dateText,setDateText]= useState('Select Date');
  const [newStartTime, setNewStartTime] = useState("Start Time")
  const [newEndTime, setNewEndTime] = useState("Start Time")
  const [timeType, setTimeType] = useState('');
  const [dateType, setDateType] = useState('');
  // const [catColor, setCatColor] = useState('');

  const catColor = random_rgba();

  const createCategory = async () => {
    await addDoc(categoryCollectionRef,
        {
            Name: newName, 
            AddInfo: newAddInfo,
            color: catColor,
        }
        );
  };
  
  const deleteCategory = async (id) =>{
      const categoryDoc = doc(db, "Category", id);
      await deleteDoc(categoryDoc)
  }

  useEffect(() => {
    const getCategories = async () => {
      const data = await getDocs(categoryCollectionRef);
      setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
      getCategories();
      console.log(getCategories);
  },[]);

  return (
    <View style={{flex:1}}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text
              style={styles.Title}>
              Adding Category
            </Text>
          </View>
          <View style={styles.HeaderBorder}/>

          <Text
            style={styles.Heading}>
            Name:
          </Text>
          <TextInput
            style={styles.Input}
            onChangeText={setNewName}
            value={newName}
            placeholder="e.g. Work / Study"
            keyboardType="default"
          />

          <Text
            style={styles.Heading}>
            Additional Info:
          </Text>
          <TextInput
            style={styles.longInput}
            onChangeText={setNewAddInfo}
            value={newAddInfo}
            placeholder="e.g. Special arrangements, people"
            keyboardType="default"
          />

          <TouchableOpacity style={styles.saveButton} onPress={()=>{createCategory(); navigation.navigate("Add Components");}}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>

          {category.map((category) => {
              return (
                <NavigationContainer independent={true}>
                    <Text>
                        Name: {category.Name},
                        Additional Info: {category.AddInfo}
                        {/* color: {category.color} */}
                      {/* categortID: {category.categoryID}, */}
                    </Text>

                    <Button
                    onPress={() => deleteCategory(category.id)}
                    title= "Delete Category"
                    >
                    </Button>
                </NavigationContainer>
              );
            })}
      </ScrollView>
    </SafeAreaView>
  </View>
  );
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
  longInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#979797',
    borderRadius: 8,
    textAlignVertical: 'top', // android top-left align
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
  },
});

export default AddCategory;