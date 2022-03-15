import * as React from 'react';

import { Alert, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TimeTable from '@mikezzb/react-native-timetable';
import {useState, useEffect} from "react";
import {db} from '../firebase_config';
import {collection, getDocs, doc} from 'firebase/firestore';

// const eventGroups = [
//   {
//     courseId: 'IM3001',
//     title: 'Digital Signal Processing',
//     sections: {
//       '- - LEC': {
//         days: [2, 3],
//         startTimes: ['11:30', '16:30'],
//         endTimes: ['12:15', '18:15'],
//         locations: ['Online Teaching', 'Online Teaching'],
//       },
//       '-L01 - LAB': {
//         days: [2],
//         startTimes: ['16:30'],
//         endTimes: ['17:15'],
//         locations: ['Online Teaching'],
//       },
//     },
//   },
//   {
//     courseId: 'IM3002',
//     title: 'Communication Principles',
//     sections: {
//       'A - LEC': {
//         days: [1, 3],
//         startTimes: ['16:30', '14:30'],
//         endTimes: ['17:15', '16:15'],
//         locations: ['Online Teaching', 'Online Teaching'],
//       },
//       'AT02 - TUT': {
//         days: [4],
//         startTimes: ['17:30'],
//         endTimes: ['18:15'],
//         locations: ['Online Teaching'],
//       },
//     },
//   },
//   {
//     courseId: 'IM3080',
//     title: 'English for ERG Stds I',
//     sections: {
//       'BEC1 - CLW': {
//         days: [2, 4],
//         startTimes: ['10:30', '8:30'],
//         endTimes: ['11:15', '10:15'],
//         locations: ['Online Teaching', 'Online Teaching'],
//       },
//     },
//   },
//   {
//     courseId: 'IM4791',
//     title: 'Statistics for Engineers',
//     sections: {
//       'B - LEC': {
//         days: [1],
//         startTimes: ['12:30'],
//         endTimes: ['14:15'],
//         locations: ['Online Teaching'],
//       },
//       'BT01 - TUT': {
//         days: [3],
//         startTimes: ['12:30'],
//         endTimes: ['14:15'],
//         locations: ['Online Teaching'],
//       },
//     },
//   },
//   {
//     courseId: 'AB1202',
//     title: 'College Assembly',
//     sections: {
//       '-A01 - ASB': {
//         days: [5],
//         startTimes: ['11:30'],
//         endTimes: ['13:15'],
//         locations: ['Online Teaching'],
//       },
//     },
//   },
//   {
//     courseId: 'MH1301',
//     title: 'Data Expl - Stat in Daily Life',
//     sections: {
//       '- - EEE': {
//         days: [4],
//         startTimes: ['14:30'],
//         endTimes: ['17:15'],
//         locations: ['MLDA'],
//       },
//     },
//   },
//   {
//     courseId: 'RAP',
//     title: 'Research',
//     sections: {
//       '- - LEC': {
//         days: [4],
//         startTimes: ['11:30'],
//         endTimes: ['13:15'],
//         locations: ['Lee Shau Kee Building LT5'],
//       },
//     },
//   },
//   {
//     courseId: 'ET0001',
//     title: 'No work on SUNDAY!',
//     sections: {
//       '': {
//         days: [7],
//         startTimes: ['12:30'],
//         endTimes: ['13:15'],
//         locations: ['Home'],
//       },
//     },
//   },
//   {
//     courseId: 'Manga!',
//     title: '',
//     sections: {
//       '': {
//         days: [6],
//         startTimes: ['16:30'],
//         endTimes: ['19:15'],
//         locations: ['Home'],
//       },
//     },
//   },
// ];





// const events = [
//   {
//     courseId: 'IM3001',
//     title: 'Intro to Computer Systems',
//     section: '- - LEC',
//     day: 2,
//     startTime: '11:30',
//     endTime: '12:15',
//     location: 'Online Teaching',
//     color: 'rgba(253,149,141,1)',
//   },
  
// ];

export default function App() {
  const [tasks, setTasks] = useState([]);
  const tasksCollectionRef = collection(db, "Display");
  useEffect(() => {
      const getTasks = async () => {
        const data = await getDocs(tasksCollectionRef);
        setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getTasks();
      console.log(getTasks);
    },[]);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar backgroundColor="rgba(95,93,166,1)" />
        <View style={styles.container}>
          <TimeTable
            // eventGroups={eventGroups}
            events={tasks}
            eventOnPress={(event) => Alert.alert(`${JSON.stringify(event)}`)}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});