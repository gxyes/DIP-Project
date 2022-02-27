import * as React from 'react'
import { ScrollView, Text, Button, TextInput, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

//Required imports for database
import {useState, useEffect} from "react";
import {db} from '../firebase_config';
import {collection, getDocs, addDoc, doc, deleteDoc} from 'firebase/firestore';

function HabitsScreen() {

    const [newTaskID, setNewTaskID] = useState(0)
    const [newCategory, setNewCategory] = useState("")
    const [newLocation, setNewLocation] = useState("")
    const [newName, setNewName] = useState("")
    const [newStartTime, setNewStartTime] = useState("")
    const [newEndTime, setNewEndTime] = useState("")
    const [newDate, setNewDate] = useState("")
    const [newReminder, setNewReminder] = useState("")
    const [newRemarks, setNewRemarks] = useState("")
  
    const [tasks, setTasks] = useState([]);
    const tasksCollectionRef = collection(db, "Task");

    const createTask = async () => {
        await addDoc(tasksCollectionRef,
            {
                Name: newName, 
                Category: newCategory,
                taskID: newTaskID,
                Location: newLocation,
                startTime: newStartTime,
                endTime: newEndTime,
                date: newDate,
                Reminder: newReminder,
                Remarks: newRemarks
            }
            );
    };

    const deleteTask = async (id) =>{
        const taskDoc = doc(db, "Task", id);
        await deleteDoc(taskDoc)
    }

    useEffect(() => {
      const getTasks = async () => {
        const data = await getDocs(tasksCollectionRef);
        setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getTasks();
    },[tasks]);
  
    return (
      <ScrollView>

        <TextInput
            style={styles.Input}
            onChangeText={setNewName}
            value={newName}
            placeholder="Task"
            
        />
        <TextInput
            style={styles.Input}
            onChangeText={setNewCategory}
            value={newCategory}
            placeholder="Category"
        />
        <TextInput
            style={styles.Input}
            onChangeText={setNewLocation}
            value={newLocation}
            placeholder="Location"
        />
        <TextInput
            style={styles.Input}
            onChangeText={setNewRemarks}
            value={newRemarks}
            placeholder="Remarks"
        />
        <TextInput
            style={styles.Input}
            onChangeText={setNewReminder}
            value={newReminder}
            placeholder="Reminder"
        />
        <TextInput
            style={styles.Input}
            onChangeText={setNewDate}
            value={newDate}
            placeholder="Date"
        />
        <TextInput
            style={styles.Input}
            onChangeText={setNewEndTime}
            value={newEndTime}
            placeholder="EndTime"
        />
        <TextInput
            style={styles.Input}
            onChangeText={setNewStartTime}
            value={newStartTime}
            placeholder="StartTime"
        />
        <TextInput
            style={styles.Input}
            onChangeText={setNewTaskID}
            value={newTaskID}
            placeholder="New Task ID"
        />
    
        
        <Button
            onPress={createTask}
            title= "Add Task"
            >
        </Button>
        
        {tasks.map((task) => {
          return (
            <NavigationContainer independent={true}>
                <Text>
                    Name: {task.Name},
                    Location: {task.Location},
                    startTime: {task.startTime},
                    endTime: {task.endTime},
                    Category: {task.Category},
                    Reminder: {task.Reminder},
                    Remarks: {task.Remarks},
                    taskID: {task.taskID},
                    Date: {task.date} {/* date must be small letter not Date!*/}
                </Text>

                <Button
                onPress={() => deleteTask(task.id)}
                title= "Delete Task"
                >
                </Button>
            </NavigationContainer>
          );
        })}
      </ScrollView>
    );
  }
  
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