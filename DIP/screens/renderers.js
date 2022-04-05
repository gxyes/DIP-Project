import React, { PureComponent } from "react";
import { StyleSheet, View, Image } from "react-native";
import ConfettiCannon from 'react-native-confetti-cannon';
import "./Globals"
 
const RADIUS = 20

class Finger extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return (
      <View style={[styles.finger, { left: x, top: y }]} />
    );
  }
}

class Avatar extends PureComponent {
  render() {
      const x = this.props.position[0] - RADIUS / 2;
      const y = this.props.position[1] - RADIUS / 2;
      return (
          <View style={[styles.avatar, { left: x, top: y }]}>
              <Image
                  style={{width: 64, height: 64}}
                  source={require('../assets/avatar7.gif')} />
          </View>
      );
  }
}

class ImgAvatar7 extends PureComponent {
  render() {
    return(
      <View style={[styles.ImgAvatar7, { left: global.left, top: global.top}]}>
          <Image
                  style={{width: 64, height: 64}}
                  source={require('../assets/avatar7.gif')} />
        </View>
    )
  }
}

class ImgAvatar1 extends PureComponent {
  render() {
    return(
      <View style={[styles.ImgAvatar7, { left: global.left, top: global.top}]}>
          <Image
                  style={{width: 64, height: 64}}
                  source={require('../assets/avatar1.gif')} />
        </View>
    )
  }
}

class Firework extends PureComponent {
  render() {
    return(
      // <View style={styles.Firework}>
      <React.Fragment>
          <ConfettiCannon
            count={200} 
            origin={{x: 200, y: -100}}
          >
          </ConfettiCannon>
      </React.Fragment>
      // </View>
    )
  }
}


const styles = StyleSheet.create({
  finger: {
    borderColor: "#CCC",
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "pink",
    position: "absolute",
  },
  avatar: {
    position: "absolute",
  },
  ImgAvatar7: {
    position: "absolute"
  },
  Firework: {
    // position: "fixed",
    // zIndex: 10,  
    zIndex:999
  }
});



export { Finger };
export { Avatar };
export { ImgAvatar7 };
export { ImgAvatar1 };
export {Firework};
