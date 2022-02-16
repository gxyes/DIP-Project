import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Spacer, Center, NativeBaseProvider} from "native-base";
import TimeTableContainer from '../components/TimeTableContainer';
import TodoContainer from '../components/TodoContainer';
import TodayContainer from '../components/TodayContainer';
import TopBar from '../navigation/TopBar';
import { SafeAreaView } from 'react-native-safe-area-context';


const TimetableScreen = ({navigation}) => {
    return (
      <TopBar/>
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