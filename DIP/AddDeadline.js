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

const AddDeadline = () => {
  const [newName, setNewName] = useState("");
  const [newRemarks, setNewRemarks] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newReminder, setNewReminder] = useState("");

  // navigation const
  const navigation = useNavigation();

  // additional firebase stuff
  const [deadline, setDeadlines] = useState([]);
  const deadlineCollectionRef = collection(db, "Deadline");
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

  // reminder const & declaration
  const reminderList = ["No Reminder",
    "At time of deadline",
    "5 minutes before",
    "15 minutes before",
    "30 minutes before",
    "45 minutes before",
    "1 hour before",
    "2 hours before",
    "1 day before",
    "2 days before",
    "3 days before",
    "4 days before", 
    "5 days before",
    "1 week before"
  ]
  const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
  const [modalReminderVisible, setModalReminderVisible] = useState(false);
  
  let ListCategory=category.map((category)=>{
    return <TouchableOpacity style={styles.buttonStyle} onPress={() => { setNewCategory(category.Name);setModalCategoryVisible(false); console.log(category.Name)}}> 
        <Text style={{ fontSize: 14 }}>{category.Name}</Text>
  </TouchableOpacity>
  })

  let ListReminders=reminderList.map((item,index)=>{
    return <TouchableOpacity style={styles.buttonStyle} onPress={() => {setNewReminder(item); setModalReminderVisible(false)}}>
        <Image
          source={require('./assets/alarm.png')} style={{width: 15, height: 15}} 
          // style={styles.ImageIconStyle}
          />
        <Text style={{ marginLeft:10, fontSize: 14 }}>{item}</Text>
      </TouchableOpacity> 
  })

  const getModalCategory = () =>{
    return (
      
      <Modal
        entry="bottom"
        backdropPressToClose={true}
        isOpen={modalCategoryVisible}
        style={styles.modalBox}
        onClosed={() => setModalCategoryVisible(false)}
      >
        <View style={styles.content}>            
          {ListCategory}
          <Button title='x Close' color={'#6568A6'} onPress={() => setModalCategoryVisible(false)} />
        </View>
      </Modal>
    );
  };

  const getModalReminder = () =>{
    return (
      <Modal
        entry="bottom"
        backdropPressToClose={true}
        isOpen={modalReminderVisible}
        style={styles.modalBox}
        propagateSwipe={true}
        onClosed={() => setModalReminderVisible(false)}
        ScrollViewProps={true}
        onPress={() => setModalReminderVisible(false)}
      >
        <View style={{flex:1}}>
          <ScrollView style={styles.modalScroll}> 
            {ListReminders}
            <TouchableOpacity style={styles.closeButtonStyle} onPress={() => setModalReminderVisible(false)}>
              <Text style={{ color: '#6568A6'}}>x Close</Text>
            </TouchableOpacity> 
          </ScrollView>
        </View>
          
      </Modal>
    );
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const onChange = (event, selectedDate)=> {
    const currentDate = selectedDate || newDate;
    setShow(Platform.OS === 'ios');
    setNewDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    // setDateText(fDate);
    {timeType == 'Date' ? setDateText(fDate) : null};
    {timeType == 'Start' ? setNewStartTime(fTime) : null};
    {timeType == 'End' ? setNewEndTime(fTime) : null};

    console.log(fDate+"("+fTime+")"+"("+sTime+")")
  };

  const createDeadline = async () => {
    await addDoc(deadlineCollectionRef,
        {
            Name: newName, 
            // deadlineID: newDeadlineID,
            // startTime: newStartTime,
            // endTime: newEndTime,
            date: dateText,
            Reminder: newReminder,
            Remarks: newRemarks,
            Category: newCategory
        }
        );
  };
  
  const deleteDeadline = async (id) =>{
      const deadlineDoc = doc(db, "Deadline", id);
      await deleteDoc(deadlineDoc)
  }

  useEffect(() => {
    const getDeadlines = async () => {
      const data = await getDocs(deadlineCollectionRef);
      setDeadlines(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getCategories = async () => {
      const data = await getDocs(categoryCollectionRef);
      setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    setInterval(() => {
      getDeadlines();
      getCategories();
      console.log(getDeadlines);
    }, 8000)
  },[]);


  return (
    <View style={{flex:1}}>
      <SafeAreaView>
        <ScrollView style={styles.ScrollView}>
        <View>
          <Text
            style={styles.Title}>
            Adding Deadline
          </Text>
        </View>

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
          Category:
        </Text>

        <TouchableOpacity 
          style={{height: 25, backgroundColor: '#C4C4C4', borderRadius: 5, margin: 11, justifyContent: 'center'}} 
          onPress={() => setModalCategoryVisible(true)}>
            {newCategory==''?<Text>  Select Category</Text>:<Text>  {newCategory}</Text>}
        </TouchableOpacity>
        
        <Text
          style={styles.Heading}>
          Date:
        </Text>
        <TouchableOpacity style={{height: 25, backgroundColor: '#C4C4C4', borderRadius: 5, margin: 13, justifyContent: 'center'}}
        onPress={()=>{ setTimeType("Date"); showMode('date')} }>
          <Text>  {dateText}</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
          testID='dateTimePicker'
          value={newDate}
          mode = {mode}
          is24Hour = {true}
          display='default'
          onChange={onChange}
          style={{marginRight:15}}
          />
      )}
        <Text
          style={styles.Heading}>
          Reminder:
        </Text>
        <TouchableOpacity 
        style={{height: 25, backgroundColor: '#C4C4C4', borderRadius: 5, margin: 11, justifyContent: 'center'}}
        onPress={() => setModalReminderVisible(true)}>
          {newReminder ==''?<Text>  Select Reminder</Text>:<Text>  {newReminder}</Text>}
        </TouchableOpacity>

        <Text
          style={styles.Heading}>
          Remarks:
        </Text>
        <TextInput
          style={styles.longInput}
          onChangeText={setNewRemarks}
          value={newRemarks}
          placeholder="Details (e.g. items to bring along)"
          keyboardType="default"
          multiline={true}
        />

        <TouchableOpacity style={styles.saveButton} onPress={()=>{createDeadline(); navigation.navigate("Add Components");}}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>

        {deadline.map((deadline) => {
          return (
            <NavigationContainer independent={true}>
                <Text>
                    Name: {deadline.Name},
                    Category: {deadline.Category},
                    Reminder: {deadline.Reminder},
                    Remarks: {deadline.Remarks},
                    {/* deadlineID: {deadline.deadlineID}, */}
                    Date: {deadline.date} {/* date must be small letter not Date!*/}
                </Text>

                <Button
                onPress={() => deleteDeadline(deadline.id)}
                title= "Delete Deadline"
                >
                </Button>
            </NavigationContainer>
          );
        })}

        </ScrollView>
      </SafeAreaView>
      
      {getModalCategory()}
      {getModalReminder()}
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
  Title: {
    height: 30,
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5F5DA6',
  },
  saveButton: {
    margin: 13,
    height: 35,
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
    backgroundColor: "transparent",
  },
  modalScroll:{
    marginTop: 300,
    overflow: "hidden",
    textAlign: "left",
    // alignItems:"center",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    paddingLeft:15,
    paddingBottom:15,
    flex: 1,
    height: 'auto',
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
    padding: 10,
    minWidth: '100%'
  },
  closeButtonStyle:{
    alignItems: 'flex-start',
    color: '#6568A6',
    fontSize: 16,
    //fontWeight: "bold",
    padding: 10,
  },
  timeContainer: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    justifyContent: 'center',
  },
  posttext:{
    textAlign:'center'
  }
});

export default AddDeadline;