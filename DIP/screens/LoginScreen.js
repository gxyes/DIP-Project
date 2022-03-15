import * as React from 'react'
import { SafeAreaView, ScrollView, Text, Button, TextInput, StyleSheet, LogBox, View , 
       TouchableOpacity,
        } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";


//Required imports for database
import {useState, useEffect} from "react";
import {db} from '../firebase_config';
import {collection, getDocs, addDoc, doc, deleteDoc} from 'firebase/firestore';

// import auth
// import auth from "@react-native-firebase/auth"

LogBox.ignoreLogs(['Setting a timer for a long period of time'])
// ignore warning for constantly refreshing view

function LoginScreen({navigation}) {
  const [username, setUsername]= useState("")
  const [password, setPassword]= useState("")
  return (
    <SafeAreaView>
      <View>
        <Text
          style={styles.e_Title}>
          Login
        </Text>
      </View>
      <View style={styles.e_HeaderBorder}/>        
      <Text
        style={styles.e_Heading}>
        Username:
      </Text>
      <TextInput
        style={styles.e_Input}
        onChangeText={setUsername}
        value={username}
        placeholder='Username'
        keyboardType="default"
      />
      <Text
        style={styles.e_Heading}>
        Password:
      </Text>
      <TextInput
        secureTextEntry={true}
        style={styles.e_Input}
        onChangeText={setPassword}
        value={password}
        placeholder='Password'
        keyboardType="default"
      />
      <TouchableOpacity onPress={() => {
          // Pass and merge params back to home screen
          navigation.push('Me Screen'
            // params: { newName, newInfo1, newInfo2, selectedImage },
            // merge: true,
          )}} style={styles.e_saveButton}>
        <Text style={styles.e_saveButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems:"center"}} onPress={() => {navigation.navigate('SignUp Screen')}} >
        <Text style={{color: 'grey'}}>
          New here?
          <Text style={styles.ToggleText}> Create an Account</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>)
}

function SignUpScreen({navigation}) {
  const [newUsername, setNewUsername]= useState("")
  const [newPassword, setNewPassword]= useState("")
  const [newEmail, setNewEmail]= useState("")
  // const __doCreateUser = async (email, password) =>{
  //   try {
  //    let response =  await auth().createUserWithEmailAndPassword(email, password);
  //     if(response){
  //       console.log(tag,"?",response)
  //     }
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // }
  return (
    <SafeAreaView>
      <View>
        <Text
          style={styles.e_Title}>
          Sign Up
        </Text>
      </View>
      <View style={styles.e_HeaderBorder}/>        
      <Text
        style={styles.e_Heading}>
        Username:
      </Text>
      <TextInput
        style={styles.e_Input}
        onChangeText={setNewUsername}
        value={newUsername}
        placeholder='Username'
        keyboardType="default"
      />
      <Text
        style={styles.e_Heading}>
        Email:
      </Text>
      <TextInput
        style={styles.e_Input}
        onChangeText={setNewEmail}
        value={newEmail}
        placeholder='Email'
        keyboardType='email-address'
      />
      <Text
        style={styles.e_Heading}>
        Password:
      </Text>
      <TextInput
        secureTextEntry={true}
        style={styles.e_Input}
        onChangeText={setNewPassword}
        value={newPassword}
        placeholder='Password'
        keyboardType="default"
      />
      <TouchableOpacity onPress={() => {
          // Pass and merge params back to home screen
          navigation.push('Me Screen')}} style={styles.e_saveButton}>
        <Text style={styles.e_saveButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems:"center"}} onPress={() => {navigation.navigate('Login Screen')}} >
        <Text style={{color: 'grey'}}>
          Already have an Account?
          <Text style={styles.ToggleText}> Login</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>)
}

const Stack = createStackNavigator()

export default function ComponentStack() {

  return (
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown:false}}> 
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="SignUp Screen" component={SignUpScreen} />
    </Stack.Navigator>
  )
};

const styles = StyleSheet.create({
    //Login 
    Input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: '#979797',
      borderRadius: 8,
    },
    ToggleText:{
      color: '#5F5DA6',
    },
    e_Input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: '#979797',
      borderRadius: 8,
    },
    e_Heading: {
      height: 20,
      margin: 12,
      marginBottom: -10,
      fontWeight: 'bold',
    },
    e_AddPagesHeader: {
      height: 20,
      margin: 12,
      color: '#5F5DA6',
      fontWeight: 'bold',
    },
    e_AddPagesBorder: {
      borderBottomColor: '#C4C4C4',
      borderBottomWidth: 1,
      marginRight: 12,
      marginLeft: 12,
      marginTop: -5,
    },
    e_HeaderBorder: {
      borderBottomColor: '#C4C4C4',
      borderBottomWidth: 1,
    },
    e_Title: {
      height: 20,
      margin:12,
      fontSize: 18,
      fontWeight: 'bold',
      color: '#5F5DA6',
    },
    e_saveButton: {
      margin: 13,
      height: 35,
      marginTop: 25,
      backgroundColor: '#5F5DA6',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
    e_saveButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff'
    },
});


// reference code for database
  //   const [newTaskID, setNewTaskID] = useState(0)
  //   const [newCategory, setNewCategory] = useState("")
  //   const [newLocation, setNewLocation] = useState("")
  //   const [newName, setNewName] = useState("")
  //   const [newStartTime, setNewStartTime] = useState("")
  //   const [newEndTime, setNewEndTime] = useState("")
  //   const [newDate, setNewDate] = useState("")
  //   const [newReminder, setNewReminder] = useState("")
  //   const [newRemarks, setNewRemarks] = useState("")
  
  //   const [tasks, setTasks] = useState([]);
  //   const tasksCollectionRef = collection(db, "Task");

  //   const createTask = async () => {
  //       await addDoc(tasksCollectionRef,
  //           {
  //               Name: newName, 
  //               Category: newCategory,
  //               // taskID: newTaskID,
  //               Location: newLocation,
  //               // startTime: newStartTime,
  //               // endTime: newEndTime,
  //               date: newDate,
  //               Reminder: newReminder,
  //               Remarks: newRemarks
  //           }
  //           );
  //   };

  //   const deleteTask = async (id) =>{
  //       const taskDoc = doc(db, "Task", id);
  //       await deleteDoc(taskDoc)
  //   }

  //   useEffect(() => {
  //     const getTasks = async () => {
  //       const data = await getDocs(tasksCollectionRef);
  //       setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     };
  //     setInterval(() => {
  //       getTasks();
  //       console.log(getTasks);
  //     }, 1800)
      
  //   },[]);
  
  //   return (
  //     <ScrollView>

  //       <TextInput
  //           style={styles.Input}
  //           onChangeText={setNewName}
  //           value={newName}
  //           placeholder="Task"
            
  //       />
  //       <TextInput
  //           style={styles.Input}
  //           onChangeText={setNewCategory}
  //           value={newCategory}
  //           placeholder="Category"
  //       />
  //       <TextInput
  //           style={styles.Input}
  //           onChangeText={setNewLocation}
  //           value={newLocation}
  //           placeholder="Location"
  //       />
  //       <TextInput
  //           style={styles.Input}
  //           onChangeText={setNewRemarks}
  //           value={newRemarks}
  //           placeholder="Remarks"
  //       />
  //       <TextInput
  //           style={styles.Input}
  //           onChangeText={setNewReminder}
  //           value={newReminder}
  //           placeholder="Reminder"
  //       />
  //       <TextInput
  //           style={styles.Input}
  //           onChangeText={setNewDate}
  //           value={newDate}
  //           placeholder="Date"
  //       />
  //       <TextInput
  //           style={styles.Input}
  //           onChangeText={setNewEndTime}
  //           value={newEndTime}
  //           placeholder="EndTime"
  //       />
  //       <TextInput
  //           style={styles.Input}
  //           onChangeText={setNewStartTime}
  //           value={newStartTime}
  //           placeholder="StartTime"
  //       />
  //       <TextInput
  //           style={styles.Input}
  //           onChangeText={setNewTaskID}
  //           value={newTaskID}
  //           placeholder="New Task ID"
  //       />
    
        
  //       <Button
  //           onPress={createTask}
  //           title= "Add Task"
  //           >
  //       </Button>
        
  //       {tasks.map((task) => {
  //         return (
  //           <NavigationContainer independent={true}>
  //               <Text>
  //                   Name: {task.Name},
  //                   Location: {task.Location},
  //                   {/* startTime: {task.startTime}, */}
  //                   {/* endTime: {task.endTime}, */}
  //                   Category: {task.Category},
  //                   Reminder: {task.Reminder},
  //                   Remarks: {task.Remarks},
  //                   {/* taskID: {task.taskID}, */}
  //                   Date: {task.date} {/* date must be small letter not Date!*/}
  //               </Text>

  //               <Button
  //               onPress={() => deleteTask(task.id)}
  //               title= "Delete Task"
  //               >
  //               </Button>
  //           </NavigationContainer>
  //         );
  //       })}
  //     </ScrollView>
  //   );
  // }
  
