import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Spacer, Center, NativeBaseProvider} from "native-base";
import DeadlineCard from '../components/DeadlineCard';
import TaskCard from '../components/TaskCard';
import EventCard from '../components/EventCard';
import TimeTableContainer from '../components/TimeTableContainer';
import TodoContainer from '../components/TodoContainer';
import TodayContainer from '../components/TodayContainer';

const TimetableScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <NativeBaseProvider>
            <TodoContainer/>
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
    backgroundColor: '#ffffff',
    width: 330,
    marginLeft: 20,
    marginRight: 20,
  },
});