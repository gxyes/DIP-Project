import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar, Button, View, Text, Image, ImageBackground } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger, ImgAvatar1, ImgAvatar7, Firework } from "./renderers";
import { Avatar } from "./renderers";
import { ImgAvatar, } from "./renderers";
import { MoveAvatar, MoveFinger, updatePostion, imgAvatar, triggerFirework } from "./systems";
import "./Globals";

export default class BestGameEver extends PureComponent {
  constructor() {
    super();
  }

  updatePostion1 = () => {
    if(global.count <= global.progress/10){
      switch(global.count){
        case 0: //update the position of avatar according to accordinates
          global.left = 200; 
          global.top = 100;
          break;
        case 1:
          global.left = 50; 
          global.top = 0;
          break;
        case 2:
          global.left = 300;
          global.top = 300;
          break;
        case 3: //update the position of avatar according to accordinates
          global.left = 200; 
          global.top = 100;
          break;
        case 4:
          global.left = 50; 
          global.top = 0;
          break;
        case 5:
          global.left = 300;
          global.top = 300;
          break;
        case 6: //update the position of avatar according to accordinates
          global.left = 200; 
          global.top = 100;
          break;
        case 7:
          global.left = 50; 
          global.top = 0;
          break;
        case 8:
          global.left = 300;
          global.top = 300;
          break;
        case 9:
          global.left = 300;
          global.top = 300;
          break;
        case 10:
          global.left = 300;
          global.top = 300;
          break;
      }
      global.count++;
    }

    console.log("top:" + global.top);
    console.log("left:" + global.left);
    console.log("progress: " + global.progress);
    console.log("count: " + global.count);
  }

  render() {
    return (      
      <View style={styles.container}>
        <ImageBackground
          style={{justifyContent: 'center', width:400, height:1000, flex:1}}
          resizeMode="cover"
          source={require('../assets/background_checkpoint.png')}>
          <GameEngine
            systems={[updatePostion]}
            entities={{
              1: { position: [50,50], renderer: <ImgAvatar7 />}, //-- Notice that each entity has a unique id (required)
              2: { position: [100, 200], renderer: <ImgAvatar1 />}, //-- and a renderer property (optional). If no renderer
            }}>
          </GameEngine>

          <StatusBar hidden={true} />  

          {/* <Text style={styles.title}>
            Update Avatar position
          </Text> */}
          <Button
            title="Press me"
            onPress={this.updatePostion1}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  }
});

AppRegistry.registerComponent("BestGameEver", () => BestGameEver);