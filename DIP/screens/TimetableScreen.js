
// import * as React from 'react'
// import { View, Text } from 'react-native'

// export default function TimetableScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text
//                 style={{ fontSize: 26, fontWeight: 'bold' }}>Timetable Screen</Text>
//         </View>
//     )
// }


import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const TimetableScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>TimetableScreen</Text>
        </View>   
    );
};

export default TimetableScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   backgroundColor: '#8fcbbc'
  },
});