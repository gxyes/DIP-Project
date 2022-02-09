import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Spacer, Center, NativeBaseProvider} from "native-base";
import DeadlineCard from '../components/DeadlineCard';
import TaskCard from '../components/TaskCard';
import EventCard from '../components/EventCard';

const TimetableScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <NativeBaseProvider>
            <Spacer/>
            <EventCard/>
            <Spacer/>
            <DeadlineCard/>
            <Spacer/>
            <TaskCard/>
            <Spacer/>
          </NativeBaseProvider>
        </View>   
    );
};

export default TimetableScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
});