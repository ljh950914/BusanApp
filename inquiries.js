import React, {Component, useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet,TouchableOpacity,Linking} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {kor,eng} from './config.json';


function inquiriesPage(props){
    const {navigation} = props
    const [a, setA] = useState(false);
    const {test, main_title1}  = useSelector((state) => state.testReducer);
    const [lang, setLang] = useState('kor')
    const dispatch = useDispatch();
    const up = () => {
      dispatch({
        type : 'change'
      })
     setLang(test)
      }  
        {test === 'kor' ? headerTitle=kor.main_title5 : headerTitle=eng.main_title5}

            useEffect(()=>{
          navigation.setOptions({ title: headerTitle })
    },[])
  return (
    <>
    
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.topStyle}> 
          <Text style={styles.textStyle}> {test === 'kor' ? kor.sub_page5_t1 : eng.sub_page5_t1}  </Text>
          <Text style={styles.textStyle2}> {test === 'kor' ? kor.sub_page5_t1_t1 : eng.sub_page5_t1_t1} </Text>
          <Text style={[styles.textStyle2, {marginBottom:10}]}> {test === 'kor' ? kor.sub_page5_t1_t2 : eng.sub_page5_t1_t2} </Text>
        <Text style={styles.textStyle}>{test === 'kor' ? kor.sub_page4_t1 : eng.sub_page4_t1}</Text>

        <TouchableOpacity style={styles.btnStyle} activeOpacity={1} onPress={()=>props.navigation.navigate('students')}>
          <Text style={[styles.textStyle1, {color:'white', fontWeight:'bold'}] }> {test === 'kor' ? kor.sub_page4_b1 : eng.sub_page4_b1} </Text>
        </TouchableOpacity>
        <Text style={[styles.textStyle2, {marginBottom:10}] }> {test === 'kor' ? kor.sub_page4_b1_t : eng.sub_page4_b1_t} </Text>

        <TouchableOpacity style={styles.btnStyle} activeOpacity={1} onPress={()=>props.navigation.navigate('students')}>
          <Text style={[styles.textStyle1, {color:'white', fontWeight:'bold'}] }> {test === 'kor' ? kor.sub_page4_b2 : eng.sub_page4_b2} </Text>
        </TouchableOpacity>  
        <Text style={[styles.textStyle2, {marginBottom:10}] }> {test === 'kor' ? kor.sub_page4_b2_t : eng.sub_page4_b2_t}</Text>

          <TouchableOpacity style={styles.btnStyle} activeOpacity={1} onPress={()=>Linking.openURL(`tel:051-510-7827`)}>
            <Text style={[styles.textStyle1, {color:'white', fontWeight:'bold'}] }> {test === 'kor' ? kor.sub_page4_b3 : eng.sub_page4_b3} </Text>
          </TouchableOpacity>
          <Text style={[styles.textStyle2, {marginBottom:10}]}> {test === 'kor' ? kor.sub_page4_b3_t : eng.sub_page4_b3_t} </Text>
          </View>
      </View>
     </View>  
      </>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
  },

  section: {
    width: '100%',
    height: '30%',
    padding:'5%'
  },

  textStyle: {
    marginLeft:10,
    fontSize: 20,
    fontWeight:"bold",
    marginBottom:'5%'
  },
  textStyle2: {
    marginLeft:20,
    fontSize: 12,
    marginBottom: 5
  },
  topStyle: {
    width:'100%',
    height: '50%',
  },

  btnStyle: {
    width:"100%",
    height:"65%",
    backgroundColor:'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    color:'red',
    alignItems:'center',
    marginBottom:10
  }

})

export default inquiriesPage;