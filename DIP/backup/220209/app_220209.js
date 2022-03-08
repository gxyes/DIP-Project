import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { React } from 'react';
// import { 
//   StyleSheet, 
//   Text, 
//   View , 
//   SafeAreaView, 
//   TouchableOpacity
// } from 'react-native';
import { StyleSheet, Text, View, Button, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Modal from "react-native-modalbox";
import { BottomSheet, ListItem } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChooseCategoryOverlay from './Overlays/ChooseCategoryOverlay';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height } = Dimensions.get("window");

export default function App() {
  const categoryList = ["Category1", "Category2", "Category3"];
  const reminderList = ["No Reminder",
"At time of event",
"5 minutes before",
"15 minutes before",
"30 minutes before",
"45 minutes before",
"1 hour before",
"2 hours before",
"1 day before",
"2 days before",
"3 days before",
"4 days before",
"5 days before",
"1 week before"
]
  const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
  const [modalReminderVisible, setModalReminderVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [reminder, setReminder] = useState("");
  // console.log(categoryList.length);
  const getModalCategory = () =>{
      return (
        
        <Modal
          entry="bottom"
          backdropPressToClose={true}
          isOpen={modalCategoryVisible}
          style={styles.modalBox}
          onClosed={() => setModalCategoryVisible(false)}
        >
          <View style={styles.content}>
            {/* <Text style={styles.textStyle}>{categoryList[0]}</Text> */}
            <Button title={categoryList[0]} onPress={() => setCategory(categoryList[0])} />
            {categoryList.length >= 2? <Button title={categoryList[1]} onPress={() => setCategory(categoryList[1])} />: null }
            {categoryList.length >= 3? <Button title={categoryList[2]} onPress={() => setCategory(categoryList[2])} />: null }
            {categoryList.length >= 4? <Button title={categoryList[3]} onPress={() => setCategory(categoryList[3])} />: null }
            {categoryList.length >= 5? <Button title={categoryList[4]} onPress={() => setCategory(categoryList[4])} />: null }
            <Button title='Cancel' color={"grey"} onPress={() => setModalCategoryVisible(false)} />
            

          </View>
        </Modal>
      );
  };

  const getModalReminder = () =>{
    return (
      <Modal
        entry="bottom"
        backdropPressToClose={true}
        isOpen={modalReminderVisible}
        style={styles.modalBox}
        propagateSwipe={true}
        onClosed={() => setModalReminderVisible(false)}
      >
        <ScrollView style={styles.modalScroll}>
          {/* <View style={styles.content}> */}
            <Button title={reminderList[0]} onPress={() => setReminder(reminderList[0])} />
            <Button title={reminderList[1]} onPress={() => setReminder(reminderList[1])} />
            <Button title={reminderList[2]} onPress={() => setReminder(reminderList[2])} />
            <Button title={reminderList[3]} onPress={() => setReminder(reminderList[3])} />
            <Button title={reminderList[4]} onPress={() => setReminder(reminderList[4])} />
            <Button title={reminderList[5]} onPress={() => setReminder(reminderList[5])} />
            <Button title={reminderList[6]} onPress={() => setReminder(reminderList[6])} />
            <Button title={reminderList[7]} onPress={() => setReminder(reminderList[7])} />
            <Button title={reminderList[8]} onPress={() => setReminder(reminderList[8])} />
            <Button title={reminderList[9]} onPress={() => setReminder(reminderList[9])} />
            <Button title={reminderList[10]} onPress={() => setReminder(reminderList[10])} />
            <Button title={reminderList[11]} onPress={() => setReminder(reminderList[11])} />
            <Button title={reminderList[12]} onPress={() => setReminder(reminderList[12])} />
            <Button title={reminderList[13]} onPress={() => setReminder(reminderList[13])} />
            <Button title='Cancel' color={"grey"} onPress={() => setModalReminderVisible(false)} />

          {/* </View> */}

        </ScrollView>
          
          
      </Modal>
    );
};

  return (
      <View style={styles.container}>
        
        <Button title="Choose Category!" onPress={() => setModalCategoryVisible(true)} />
        {getModalCategory()}
        <Text>Category: {category}</Text>
        <Button title="Choose Reminder!" onPress={() => setModalReminderVisible(true)} />
        <Text>Reminder: {reminder}</Text>
        {getModalReminder()}
      </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBox: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height,
    width,
    backgroundColor: "transparent"
  },
  modalScroll:{
    marginTop: 300,
    overflow: "hidden",
    flex: 1,
    height,
    width,
    backgroundColor: "white"
  },
  content: {
    position: "absolute",
    bottom: 0,
    width,
    // height: verticalScale(250),
    height: 250,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    backgroundColor: "white"
  },
  textStyle: {
    fontSize: 22
  }
});

  
//   const renderContent = () => (
//     <View
//       style={{
//         backgroundColor: 'white',
//         padding: 16,
//         height: 450,
//       }}
//     >
//       <Text>Swipe down to close</Text>
//     </View>
//   );

//   const sheetRef = React.useRef(null);

//   return (
//     <>
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'papayawhip',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Button
//           title="Open Bottom Sheet"
//           onPress={() => sheetRef.current.snapTo(0)}
//         />
//       </View>
//       <BottomSheet
//         ref={sheetRef}
//         snapPoints={[450, 300, 0]}
//         borderRadius={10}
//         renderContent={renderContent}
//       />
//     </>
//   );
// }
  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   overlay: {
//     flex: 1,
//     width: '100%',
//     height: '50%',
//     backgroundColor: '#fff',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-end',
//   },
// });
