import * as React from 'react'
import { ScrollView, Text, Button, TextInput, StyleSheet, LogBox, View,TouchableOpacity,StatusBar, Linking  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome';

//Required imports for database
import {useState, useEffect} from "react";
import {db} from '../firebase_config';
import {collection, getDocs, addDoc, doc, deleteDoc} from 'firebase/firestore';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])
// ignore warning for constantly refreshing view

function HabitsScreen() {

  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);


  const randomQuote = () => {
    setIsLoading(true);
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
      //console.log(result.content);
      setQuote(result.content);
      setAuthor(result.author);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9597BF',
      }}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          width: '90%',
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 20,
        }}>
       <Text
          style={{
            textAlign: 'center',
            fontSize: 26,
            fontWeight: '600',
            color: '#333',
            marginBottom: 20,
          }}>
          Quote of the Day
        </Text>

        <FontAwesome5
          name="quote-left"
          style={{fontSize: 20, marginBottom: -12}}
          color="#000"
        />

        <Text
          style={{
            color: '#000',
            fontSize: 16,
            lineHeight: 26,
            letterSpacing: 1.1,
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 10,
            paddingHorizontal: 30,
          }}>
          {Quote}
        </Text>

        <FontAwesome5
          name="quote-right"
          style={{
            fontSize: 20,
            textAlign: 'right',
            marginTop: -20,
            marginBottom: 20,
          }}
          color="#000"
        />


        <Text
          style={{
            textAlign: 'right',
            fontWeight: '300',
            fontStyle: 'italic',
            fontSize: 16,
            color: '#000',
          }}>
          ——{Author}
        </Text>


        <TouchableOpacity
          onPress={randomQuote}
          style={{
            backgroundColor: '#5F5DA6',
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}>
          <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
            New Quote
          </Text>
        </TouchableOpacity>

    </View>
    </View>
)
}
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
  
export default HabitsScreen;

const styles = StyleSheet.create({
    Input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: '#979797',
      borderRadius: 8,
    }
});