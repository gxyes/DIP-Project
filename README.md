# DIP-Project （A Focus App Development 📅）

By IEM AY2021/2022 DIP Group 1
***

### Table of Contents
[1. Group Info](#Group-Info)  
[2. Project Introduction](#Introduction-of-Focus-mobile-app-and-methodologies)  
[3. Requirements](#Requirements)  
[4. Clone Insturctions](#Clone-to-local)  


***

### Group Info
 Group Leader: Guo Xinying  
 Group Member: Goh Jessie, Gwenn Tan Yiru, Marcus Leong Yu Zhen, Michael Cahyadi Tjondro Kusumo, Tan Jichen, Wang Xinyu   
               
***
### Introduction of Focus mobile app and methodologies
![image](https://github.com/GXYnoz/DIP-Project/blob/master/Reports/group1_publicity_poster.png)


https://user-images.githubusercontent.com/96687844/163228126-4aec176a-77e6-40ca-95d2-a4b530ef9098.mp4





### Requirements
1. expo version 5.3.0  
2. npm version 6.14.8  
3. yarn version 1.22.10  
***

### Clone to local
After you clone the repository, please run **yarn install** first for installing all necessary libraries. If you are missing some packages, please refer to the following **3rd Party Library List** for further installation
| Name             | Link                                                 | Used in (Components/Pages/...)                            | Installation                                                                                         |
| ---------------- | ---------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| NativeBase       | https://nativebase.io/                               | EventCard.js, TaskCard.js, DeadlineCard.js                | yarn add native-base<br>expo install react-native-svg<br>expo install react-native-safe-area-context |
| Streamline       | https://app.streamlinehq.com/icons/streamline-colors |                                                           |
| Firebase         | https://firebase.google.com/                         | Database                                                  | npm install firebase                                                                                 |
| ImagePicker      | https://docs.expo.dev/versions/latest/sdk/imagepicker/ | ProfilePage                     | npm install expo-image-picker                                                                        |
| Chart            | https://www.npmjs.com/package/react-native-chart-kit                 | ProfilePage       | npm install react-native-chart-kit                                                                   |
| React Navigation | https://reactnavigation.org/docs/stack-navigator     | AddComponents.js, AddEvent.js, AddDeadline.js, AddTask.js | npm install @react-navigation/native @react-navigation/stack                                         |
| Modalbox         | https://www.npmjs.com/package/react-native-modalbox  | AddEvent.js, AddDeadline.js, AddTask.js                   | npm install react-native-modalbox                                                                    |
| ConfettiCannon         | https://www.npmjs.com/package/react-native-confetti-cannon  | GameScreen.js |yarn add react-native-confetti-cannon |
