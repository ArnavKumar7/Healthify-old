import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { render } from 'react-dom';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import AppLoading from 'expo-app-loading';
import { AppLoading, Expo } from 'expo';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';


export default class CircleElement extends React.Component {
   
    
  render() {
    let [fontsLoaded] = useFonts({Pacifico_400Regular});
    if (!fontsLoaded) 
    {
      return <AppLoading />;
    }
    return (
    <View style={styles.container}>
                      <View style={styles.CircleShapeView}>
                        <LinearGradient
                            colors={['rgba(2, 8, 155, 1)', 'rgba(132, 181, 255, 1)']}
                            style={styles.CircleShapeView}
                        />
                      </View>
                      
                      <Text style={{fontFamily: 'Pacifico_400Regular', fontSize: 36, position: 'absolute', justifyContent: 'center', color: '#ffffff', top: "60%"}}>Healthify</Text>
                      <Image
                        style={{width: 200, height: 200, position: 'absolute', justifyContent: 'center', top: "80%"}}
                        source={require('../assets/images/Picture1.png')}
                     />
                     
                    </View>
                  );
              
          
        };
      }
      
      
      const styles = StyleSheet.create({
      
        container: {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          margin: -Dimensions.get('window').width/2
        },
      
        CircleShapeView: {
          //width: 150,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').width,
          borderRadius: Dimensions.get('window').width/2,
          backgroundColor: '#00BCD4'
      },
      
      });