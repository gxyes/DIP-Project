import * as React from 'react';

import { Alert, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TimeTable from '@mikezzb/react-native-timetable';
import {useState, useEffect} from "react";
import {db} from '../firebase_config';
import {collection, getDocs, doc} from 'firebase/firestore';

export default function App() {
  const [event, setEvent] = useState([]);
  const eventsCollectionRef = collection(db, "Event");
  useEffect(() => {
      const getEvent = async () => {
        const data = await getDocs(eventsCollectionRef);
        setEvent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      setInterval(() => {
        getEvent();
        console.log(getEvent);
      }, 5000)
    },[]);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar backgroundColor="rgba(95,93,166,1)" />
        <View style={styles.container}>
          <TimeTable
            // eventGroups={event}
            events={event}
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