/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 

import React ,{useState}  from 'react';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import {Dimensions,Text, View, Image, StyleSheet,ImageBackground ,TextInput,Button} from 'react-native';
import DatePicker from 'react-native-datepicker';

import DateSelect from 'react-native-datepicker';


//import { Container, Header, Label, Button, Content, Item, Input, Textarea,  Body, Title,   Picker, Form } from 'native-base';

//import type {Node} from 'react';
//import Header_image from './Components/Header_image';
const App = () => {

  const [name,setName]=useState('XYZ');
  const [selectedDate, setSelectedDate] = useState(null)


  return (
    
    <View style={styles.container}>
          <View style={styles.CircleShapeView}>
                 <Text style={styles.title}>Healthify</Text>
                 <View style={styles.middleCircle}>
                        <View style={styles.icon}>
                        <Icon  name="arrow-left" size={20}  color="white" type="entypo" />
                        </View>
                   </View> 
                 <View style={styles.titles}>
                      <View style={styles.style1}><Text style={styles.title1}>New Account</Text></View>
                      <View style={styles.style2}><Text style={styles.title2}>Few Steps Away From A Healthy Life</Text></View>
                 </View>
                 <View style={styles.box}>
                      <Image style={styles.oldie} source={require('./Images/oldie.png') } />
                      <TextInput style={styles.inputname}
                                  placeholder='Enter Your Name'
                                  placeholderTextColor='#676BC3'
                                  onChangeText={(val)=>setName(val)}
                        />
                        <DatePicker style={styles.inputdate}
                         selected={selectedDate} 
                        onChange={date=>setSelectedDate(date)}
                        placeholder='Enter Your DOB'
                        placeholderTextColor='#676BC3'
                        //placeholderText='#676BC3'
                       // showYearDropDown
                        //scrollableMonthYearDropDown

                        />
                  
                        <View style={styles.smallrects}>
                              <View style={styles.smallrect1}></View>
                              <View style={styles.smallrect2} ></View>
                              <View style={styles.smallrect2}></View>
                        </View>
                       
               </View>

          
            <View onPress={() => this.props.navigation.navigate('Profile')}
              style={styles.button}>
                <Text style={styles.buttonText}>Next  </Text>
                <Icon
                  name='arrow-right'
                  size={25}
                  color='#ffffff'
                  style={{height:25,width:25}}/>
  
            </View>

          </View>
         
    </View>
    
  );
};

  



const styles=StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: -Dimensions.get('window').width/2,
    backgroundColor:'#ffff'
  },
  icon:{
    position:'absolute',
    width:250,
    height:300,
   margin:100,
   marginTop:'90%',
   marginRight:'50%',
   marginLeft:'2%',
   paddingLeft:15,
   paddingBottom:50,
   paddingTop:2
  },
  box:{
    margin:'2%',
    height:'95%',
    width:'85%',
    backgroundColor:'#5C6CF9',
    borderRadius: 10,
    marginLeft: 27,
    marginRight:20,
  },
  oldie:{
        position:'relative',
        marginTop:'5%',
        marginLeft:'28%'
       
  },
  inputname:{
        backgroundColor:'#ffff',
        borderWidth:1,
        borderColor:'#ffff',
        padding:8,
        margin: 20,
        width:250,
        height:50,
        borderRadius:10,
        marginLeft:'9%',
        fontFamily:'Poppins-Regular',
        textAlign:'center',
      

  },
  inputdate:{
    backgroundColor:'#ffff',
    borderWidth:0,
    borderColor:'#ffff',
    padding:0,
    margin: 5,
    width:250,
    height:50,
    borderRadius:10,
    marginLeft:'9%',
    fontFamily:'Poppins-Regular',
    textAlign:'center',
  

},
button:{
  marginTop:'2%',
  alignItems:'center',
  flexDirection:'row',
  backgroundColor:'#5C6CF9',
  width:'35%',
  height:'12%',
  marginLeft:'35%',
  borderRadius: 10,
  paddingLeft:30
  
},
buttonText:{
  
    fontFamily:'Poppins-Regular',
    fontSize:20,
    color:'#ffff'
},
smallrects:{
    flexDirection:'row',
    marginLeft:'15%',
},
smallrect1:{
  margin: 5,
  position:'relative',
  //top: "60%",
    marginTop:'10%',
    marginLeft:'5%',
    marginBottom:'5%',
    bottom:'3%',
    width:50,
    height:10,
    borderRadius:10,
    backgroundColor:"#ffffff"
},
smallrect2:{
  margin: 5,
  position:'relative',
  //top: "60%",
    marginTop:'10%',
    marginLeft:'5%',
    marginBottom:'5%',
    bottom:'3%',
    width:50,
    height:10,
    borderRadius:10,
    backgroundColor:"#C4C4C4"
},
  mycontainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  header:
  {
    width:'100%',
    height:'100%'
  },
  titles:{
      
      marginTop:'60%',
      alignItems:'center',
      width:'100%'
  },
  title:{
     position: 'absolute', justifyContent: 'center', color: '#ffffff', top: "60%",
    marginTop:10,
    margin:95,
    alignItems: 'center',
    fontFamily:'Pacifico-Regular',
    fontSize:36,
    
    
  },
  style1:{
    height:50,
    position:'relative',
    marginBottom:'0%',
    paddingBottom:0
  },
  style2:{
  
    position:'relative',
    marginTop:'0%',
    paddingTop:'0%',
  },
  title1:{
    fontFamily: 'Poppins-Regular',
    fontSize:36,
    marginBottom:'0%',
    paddingBottom:0
  },
  title2:{
    marginTop:'0%',
    paddingTop:'0%',
    fontFamily: 'Poppins-Regular',
    fontSize:16
  },
  middleCircle:
  {
    // height:'auto',
    // width: "auto",
    position:'relative',
    // minWidth: 50,
    top: "60%",
    marginTop:'30%',
    marginLeft:'2%',
    //flexDirection: "row",
    //flexWrap: "wrap",
    //position:'absolute',
    paddingHorizontal: 8,
    //paddingVertical: 6,
    paddingLeft:30,
    width: 50,
    height: 50,
    borderRadius: 50 ,
    backgroundColor: '#5C6CF9',
    // justifyContent: 'flex-end',
  
  },
  CircleShapeView: {
    //width: 150,
    position:'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    borderRadius: Dimensions.get('window').width/2,
    backgroundColor: '#5C6CF9'
},
})


export default App;
