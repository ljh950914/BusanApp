import React, {Component, useState, useEffect} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { useDispatch, useSelector } from 'react-redux';
import {kor,eng} from './config.json';


// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

const AlarmNav = (props) =>  {
    const {navigation} = props
    const {test}  = useSelector((state) => state.testReducer);
    const [setLang] = useState('kor')
    console.log(test)
    const dispatch = useDispatch();
    const up = () => {
      dispatch({
        type : 'change'
      })
     setLang(test)
    }



    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
    useEffect(()=>{
          navigation.setOptions({ title: headerTitle })
    },[])
    let headerTitle;

    {test === 'kor' ? headerTitle=kor.sub_page1_t1 : headerTitle=eng.sub_page1_t1}
    return (
    <>
  
      <View style={styles.section}>
        <View style={styles.topStyle}> 
          <Text style={styles.textStyle}>{test === 'kor' ? kor.sub_page1_t1 : eng.sub_page1_t1} </Text>
        </View>
        <View style={styles.topStyle}>
          <Switch style={styles.switchStyle}
          trackColor={{ false: "gray", true: "green" }}
          thumbColor={isEnabled ? "white" : "#f4f3f4"}
         onValueChange={toggleSwitch}
          value={isEnabled}
         />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.textStyle}>{test === 'kor' ? kor.sub_page1_t2 : eng.sub_page1_t2}</Text>
      </View>
      
      <Collapse>
        <CollapseHeader>
          <View>
            <Text style={[styles.textStyle, {fontSize: 18}]}> 공지사항1</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{backgroundColor:'white'}}>
        <Text> 상세내용1 </Text>
        </CollapseBody>
        </Collapse>
        <Collapse>
        <CollapseHeader>
          <View>
            <Text style={[styles.textStyle, {fontSize: 18}]} > 공지사항2</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={{backgroundColor:'white'}}>
        <Text> 상세내용2 </Text>
        </CollapseBody>
        </Collapse>
      </>
  )
}
const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    
  },

  textStyle: {
    marginLeft:10,
      fontSize: 20,
      fontWeight:"bold",
  },

  topStyle: {
    width: '50%',
  },
  switchStyle: {
    alignItems: 'flex-end',
    marginRight: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    marginBottom: 5,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "#fff"
  },

  header: {
    fontSize: 32,
    paddingLeft:12
  },
  title: {
    fontSize: 24
  }
})
export default AlarmNav;