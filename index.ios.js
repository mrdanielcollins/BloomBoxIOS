import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class AwesomeProject extends Component{
  render(){
    return(
    <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'powderblue',
      }}>
        <View style={{ resizeMode: 'cover', width: 370, height: 70, backgroundColor: 'skyblue'}} >
         <Text style={{textAlign: 'center', 
         paddingTop: 30, fontWeight: 'bold'}}>THIS IS MY TEST APP</Text>
        </View> 
  </View>
    );
  }

}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);