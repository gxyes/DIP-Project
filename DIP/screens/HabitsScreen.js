import * as React from 'react'
import { View, Text } from 'react-native'

//Required imports for database
import {useState, useEffect} from "react";
import {db} from '../firebase_config';
import {collection, getDocs} from 'firebase/firestore';

function HabitsScreen() {
    
  
    const [tasks, setTasks] = useState([]);
    const tasksCollectionRef = collection(db, "Task");

  
    useEffect(() => {
      const getTasks = async () => {
        const data = await getDocs(tasksCollectionRef);
        setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getTasks();
    }, []);
  
    return (
      <View className="HabitsScreen">
        
        {tasks.map((task) => {
          return (
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
          );
        })}
      </View>
    );
  }
  
  
export default HabitsScreen;


// export default function HabitScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text
//                 style={{ fontSize: 26, fontWeight: 'bold' }}>Habit Screen</Text>
//             {/* {tasks.map((task) => {return <div> <h1>Name: {task.name}</h1></div>})} */}
//         </View>
//     )
// }