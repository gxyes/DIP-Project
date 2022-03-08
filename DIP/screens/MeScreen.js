import * as React from 'react'
import { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Dimensions
  } from 'react-native';
  
import * as ImagePicker from 'expo-image-picker';
import {LineChart} from "react-native-chart-kit";
import { render } from 'react-dom';
  
const screenWidth = Dimensions.get("window").width;
const data = {
    labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
    datasets: [
      {
        data: [2, 0, 4.5, 6, 1, 3, 2],
        color: (opacity = 1) => '#FF7B00', // optional
        // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    // legend: ["Rainy Days"] // optional
  };
  const chartConfig = {
    backgroundColor: '#FFFFFF',
    backgroundGradientFrom: "#C4C4C4",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0.5,
    fillShadowGradientFrom: "#FF7B00",
    fillShadowGradientFromOpacity: 0.2,
    fillShadowGradientTo: "#FFFFFF",
    fillShadowGradientToOpacity: 0,
    color: (opacity = 0.5) => `rgba(255, 123, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    labelColor:(opacity = 0.1) => "#ffb46e",
    barPercentage: 0.5,
    decimalPlaces: 1,
    useShadowColorFromDataset: false // optional
  };
  const tasksCompleted = 20

export default function MeScreen({ navigation }) {
    const [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
        return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    if (selectedImage !== null) {
        return (
          <SafeAreaView style={styles.container}>
              <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row',marginTop:10}}>
                    {/* <Image style={styles.avatar}
                      source={{uri: selectedImage.localUri}}/> */}
                      
                  <Image style={styles.avatar}
                    
                    source={{uri: selectedImage.localUri}}/>
    
    
                  <View style={{marginLeft:10,marginTop:15}}>
                    <Text style={[styles.name,{marginBottom:10}]}>Joyce Tan </Text>
                    <Text style={styles.userInfo}> NTU IEM year 3 Student </Text>
                    <Text style={styles.userInfo}> DIP Project </Text>
                  </View>
                </View>
              </View>
              
    
            
                <View style={styles.item}>
                  <View style={styles.iconContent}>
                    <Image style={styles.icon} source={{uri: "https://img.icons8.com/color-glass/48/000000/pencil.png"}}/>
                  </View>
                  <View style={styles.infoContent}>
                  <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                    <Text style={styles.info}>Edit</Text>
                    </TouchableOpacity>
        
                  </View>
                </View>
    
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <ScrollView> */}
                  <TouchableOpacity style={styles.touchableStyle}>
                    <Text style={styles.textStyle}>
                      Total Task Completed:   
                      <Text style={styles.boldText}>  {tasksCompleted}  </Text>
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.touchableStyle}>
                    <Text style={styles.textStyle}>
                      Your Focus Time (Last Week): {'  '}  
                    </Text>
                  </TouchableOpacity>
                  <LineChart
                  data={data}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  bezier
                  />
                {/* </ScrollView> */}
            </View>
       
          </SafeAreaView>
        
        );
    }

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop:10}}>
                {/* <Image style={styles.avatar}
                  source={{uri: selectedImage.localUri}}/> */}
                  
              <Image style={styles.avatar}
                
                source={require("./assets/avatar_1.png")}/>
                {/* // source={{uri: selectedImage.localUri}}/> */}


              <View style={{marginLeft:10,marginTop:15}}>
                <Text style={[styles.name,{marginBottom:10}]}>Joyce Tan </Text>
                <Text style={styles.userInfo}> NTU IEM year 3 Student </Text>
                <Text style={styles.userInfo}> DIP Project </Text>
              </View>
            </View>
          </View>
          

        
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: "https://img.icons8.com/color-glass/48/000000/pencil.png"}}/>
              </View>
              <View style={styles.infoContent}>
              <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.info}>Edit</Text>
                </TouchableOpacity>
    
              </View>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <ScrollView> */}
              <TouchableOpacity style={styles.touchableStyle}>
                <Text style={styles.textStyle}>
                  Total Task Completed:   
                  <Text style={styles.boldText}>  {tasksCompleted}  </Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableStyle}>
                <Text style={styles.textStyle}>
                  Your Focus Time (Last Week): {'  '}  
                </Text>
              </TouchableOpacity>
              <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              bezier
              />
            {/* </ScrollView> */}
        </View>
   
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#DCDCDC",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 3,
      borderColor: "white",
      marginBottom:15,
      marginTop:15,
      marginLeft:30
    },
    name:{
      fontSize:22,
      color:"#000000",
      fontWeight:'600',
      marginTop:15
    },
    userInfo:{
      fontSize:16,
      color:"#778899",
      fontWeight:'600',
    },
  
    item:{
      flexDirection : 'row',
    },
    infoContent:{
      flex:1,
      alignItems:'flex-start',
      paddingLeft:5
    },
    iconContent:{
      flex:1,
      alignItems:'flex-end',
      paddingRight:5,
    },
    icon:{
      width:30,
      height:30,
      marginTop:20,
    },
    info:{
      fontSize:18,
      marginTop:20,
      color: "#FFFFFF",
      backgroundColor: "#778899", 
    },
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: "contain"
    },
    container: {
      flex: 1,
      backgroundColor: '#e2e2e2',
      justifyContent: 'center',
      alignItems:"center",
      paddingTop: Platform.OS ===  "android" ? StatusBar.currentHeight:0
    },
    posttext:{
      textAlign:'center'
    },
    textStyle:{
      color: 'white',
    },
    boldText:{
      fontWeight: 'bold',
    },
    touchableStyle:{
      backgroundColor: '#5F5DA6',
      borderRadius:15,
      paddingVertical:5,
      paddingHorizontal:15,
      alignSelf: 'flex-start',
      marginLeft:20,
      marginBottom:10,
    }
  });