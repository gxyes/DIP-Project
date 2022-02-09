import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View , 
    SafeAreaView, 
    Button,
    TouchableOpacity,
    TouchableHighlight
  } from 'react-native';
import {Overlay} from 'react-native-elements';
function ChooseReminderOverlay(props) {
    const [reminder, setReminder] = useState(0);
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
      };
    
    return (
        <SafeAreaView style={styles.container}>
             {/* <Overlay isVisible={visible} onBackdropPress={toggleOverlay} style={styles.overlay}> */}
               <View>
                 <TouchableHighlight underlayColor="#BFC3D9">
                   {/* <View style={styles.button}>
                     <Text style={styles.buttonText, {textAlign: "left"}}>No Reminder</Text>
                   </View> */}
                   <Button style={styles.submit} title="hi Reminder"/>
                 </TouchableHighlight>
               </View>
               <TouchableOpacity style={{borderRadius: 15}}>
                 <Text style={{ backgroundColor: 'black', color:'white', borderRadius:5, overflow:'hidden'}}>  Dummy  </Text>
                </TouchableOpacity>
                
               <View>
                 <TouchableOpacity underlayColor="#BFC3D9">
                   <View style={styles.button}>
                     <Text style={styles.buttonText, {textAlign: "left"} }>At time of event</Text>
                   </View>
                 </TouchableOpacity>
               </View>
               <View>
                 <TouchableOpacity underlayColor="#BFC3D9">
                   <View style={styles.button}>
                     <Text style={styles.buttonText, {textAlign: "left"}}>5 minutes before</Text>
                   </View>
                 </TouchableOpacity>
               </View>
            {/* </Overlay> */}
           </SafeAreaView>
    );
   
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    overlay: {
      flex: 1,
      width: '100%',
      height: '50%',
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    },
    submit: {
        backgroundColor: '#000',
        overflow: 'hidden',
     }
  });

export default ChooseReminderOverlay;