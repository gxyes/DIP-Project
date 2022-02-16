import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TimeTableContainer from '../components/TimeTableContainer';
import TodoContainer from '../components/TodoContainer';
import TodayContainer from '../components/TodayContainer';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="TimeTableContainer"
      screenOptions={{
        tabBarActiveTintColor: '#5F5DA6',
        tabBarInactiveTintColor: '#A2A4A7',
        tabBarLabelStyle: { fontSize: 12},
        tabBarPressColor: "#A2A4A7",
        tabBarStyle: { backgroundColor: '#BFC3D9' },
      }}
    >
      <Tab.Screen
        name="TimeTableContainer"
        component={TimeTableContainer}
        options={{ tabBarLabel: 'Calendar' }}
      />
      <Tab.Screen
        name="TodoContainer"
        component={TodoContainer}
        options={{ tabBarLabel: 'TODO' }}
      />
      <Tab.Screen
        name="TodayContainer"
        component={TodayContainer}
        options={{ tabBarLabel: 'Today' }}
      />
    </Tab.Navigator>
  );
}
export default function TopBar() {
  return (
    <NavigationContainer independent={true}>

      <MyTabs />
    </NavigationContainer>
  );
}