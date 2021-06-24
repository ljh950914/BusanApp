import React, {useState, createContext,useContext,useEffect, Component} from 'react';
import { Button, StyleSheet, Text, View, ImageBackground, Image, TouchableHighlight, TouchableOpacity, navigation, Linking, Link  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlarmNav from "./alarmSetting";
import inquiriesNav from "./inquiries";
import {kor,eng} from './config.json';
import { WebView } from 'react-native-webview';
import {connect, Provider} from 'react-redux';
import initStore from './store';
import { useDispatch, useSelector } from 'react-redux';

export const AppContext = createContext();

function HomeScreen({navigation}) {
    const {test}  = useSelector((state) => state.testReducer);
    const dispatch = useDispatch()
    const change = (type) => {
      dispatch({
        type : 'changeTemp',
        payload :type
      })
    }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/ios/main_bg.png')} style={styles.bgImage} >
        <View style={styles.header}>
          <TouchableHighlight style={[styles.buttonStyle, { backgroundColor: test === 'eng' ? 'rgba(0, 0, 0, 0)' : 'white'}]}  onPress={() =>change('kor')} >
            <Text style={[styles.lngStyle, {color: test === 'kor' ? 'black' : 'white'}] }> 한국어 </Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.buttonStyle, { backgroundColor :  test === 'kor' ? 'rgba(0, 0, 0, 0)' : 'white'}]}  onPress={() => change('eng')} >
            <Text style={[styles.lngStyle, {color: test === 'eng' ? 'black' : 'white'}]}> ENG </Text>
            </TouchableHighlight>
        </View>
   
      <View style={styles.title}>
        <Image source={require('./images/ios/main_logo.png')} resizeMode='stretch' style={styles.logoImage} />
      </View>
      <View style={styles.content}>
        <View style={styles.continner}>
          <TouchableOpacity style={styles.contTop} activeOpacity={1} onPress={()=> {
              navigation.navigate('alarmNav')} 
          } >
            <Image source={require('./images/ios/icon1.png')} resizeMode='contain' style={{flex: 0.5 }} />
            <Text style={styles.iconText}> {test === 'kor' ? kor.main_title1 : eng.main_title1} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contTop} activeOpacity={1} onPress={()=> navigation.navigate('dietNav')} >
            <Image source={require('./images/ios/icon3.png')} resizeMode='contain' style={{flex: 0.5 }} />
            <Text style={styles.iconText}> {test === 'kor' ? kor.main_title1 : eng.main_title2} </Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.continner} >
          <TouchableOpacity style={styles.contBottom} activeOpacity={1} onPress={()=> navigation.navigate('noticeNav')}>
            <Image source={require('./images/ios/icon2.png')} resizeMode='contain' style={{flex: 0.5 }} />
            <Text style={styles.iconText}> {test === 'kor' ? kor.main_title1 : eng.main_title3} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contBottom} activeOpacity={1} onPress={()=>navigation.navigate('rulesNav')}>
            <Image source={require('./images/ios/icon4.png')} resizeMode='contain' style={{flex: 0.5 }} />
            <Text style={styles.iconText}> {test === 'kor' ? kor.main_title1 : eng.main_title4} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contBottom} activeOpacity={1} onPress={()=> navigation.navigate('inquiriesNav')}>
            <Image source={require('./images/ios/icon5.png')} resizeMode='contain' style={{flex: 0.5 }} />
            <Text style={styles.iconText}> {test === 'kor' ? kor.main_title1 : eng.main_title5} </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}></View>       
      </ImageBackground>
    </View>
  );
}

const dietNav=()=>{
  return(
  <WebView source={{ uri: 'https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403' }} />
  )
}

const noticeNav=()=>{
  return(
  <WebView source={{ uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601' }} />
  )
}

const rulesNav=()=>{
  return(
  <WebView source={{ uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401' }} />
  )
}

const students=()=>{
  return(
  <WebView source={{ uri: 'https://dorm.pusan.ac.kr/' }} />
  )
}

const Stack = createStackNavigator();
const App = () => {
  
  return (
      <Provider store={initStore()}>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="alarmNav" component={AlarmNav} />
          <Stack.Screen name="dietNav" component={dietNav} options={{headerShown: false}}/>
          <Stack.Screen name="noticeNav" component={noticeNav} options={{headerShown: false}}/>
          <Stack.Screen name="rulesNav" component={rulesNav} options={{headerShown: false}}/>
          <Stack.Screen name="inquiriesNav" component={inquiriesNav} />
          <Stack.Screen name='students' component={students} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
       </Provider> 
  );
}

const styles = StyleSheet.create({
  bgImage: {
    width: '100%', 
    height: '100%'
  },
  logoImage: {
    width: '60%', 
    height: '45%'
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
    borderRadius: 8,
    width: '15%',
    height: '40%',
    borderWidth: 1,
    borderColor: 'white',
    position: 'relative',
  },
  lngStyle: {
    fontSize: 12,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d6ca1a',
  },
  header: {
    width:'100%',
    height:'9%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width:'100%',
    height:'20%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.0,
    backgroundColor: '#1ad657',
  },

  continner: {
    width:"100%",
    height:"50%",
    flexDirection: 'row',
    marginBottom:'5%',
    alignItems: 'center',
    justifyContent: 'center',
  },

    contTop: {
    width:"45%",
    height:"100%",
    backgroundColor:'white',
    margin:'2.5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
    
    contBottom: {
    width:"28.33%",
    height:"100%",
    backgroundColor:'white',
    margin:'2.5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  
  iconText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign:'center',
    justifyContent: 'flex-start'
  }

  
});

export default App;