import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar, Button, View, Text } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger, ImgAvatar1, ImgAvatar7 } from "./renderers";
import { Avatar } from "./renderers";
import { ImgAvatar, } from "./renderers";
import { MoveAvatar, MoveFinger, updatePostion, imgAvatar } from "./systems";
import "./Globals";

export default class BestGameEver extends PureComponent {
  constructor() {
    super();
  }

  updatePostion1 = () => {
    
    global.top += 10;
    global.left += 10;

    console.log("top:" + global.top);
    console.log("left:" + global.left);
    updatePostion;
 }
  

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[updatePostion]}
        entities={{
          1: { position: [50,50], renderer: <ImgAvatar7 />}, //-- Notice that each entity has a unique id (required)
          2: { position: [100, 200], renderer: <ImgAvatar1 />}, //-- and a renderer property (optional). If no renderer
          //3: { position: [160, 200], renderer: <Finger />}, //-- is supplied with the entity - it won't get displayed.
          //4: { position: [220, 200], renderer: <Finger />},
          //5: { position: [280, 200], renderer: <Finger />}
        }}>

        <StatusBar hidden={true} />

     
      
      <View>
        <Text style={styles.title}>
          Update Avatar position
        </Text>
       <Button
        title="Press me"
        onPress={this.updatePostion1}
        />
      </View>

      </GameEngine>
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
    paddingTop: 600,
    marginVertical: 8,
  }
});

AppRegistry.registerComponent("BestGameEver", () => BestGameEver);