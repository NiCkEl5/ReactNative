import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Button, Card } from 'react-native-elements';
import Card1 from './Card1'
import Card2 from './Card2'

// Styles
import styles from './Styles/LaunchScreenStyles'

const dateTime = new Date().toJSON().slice(0,19).replace(/-/g,'/').split('T').join(' ');

export default class LaunchScreen extends Component {

  testConsole(){
    console.log('testConsole');
  }

  render () {
    return (
      <View style={{marginTop: 50}}>
        <ScrollView>
          <Card1 />
          <Card2  dateTime={dateTime}/>
          <View style={{padding: 15}}>
            <Button
              onPress={() => window.alert('Ghost Button')}
              icon={{
                name: "delete",
                size: 15,
                color: "red"
              }}
              buttonStyle={{marginBottom: 15, borderRadius: 5, borderWidth: 1, borderColor: "red", backgroundColor: "white"}}
              title={<Text style={{color: "red"}}>
                      Ghost Button
                    </Text>}/>
            <Button
              onPress={() => window.alert('Facebook')}
              buttonStyle={{borderRadius: 5, backgroundColor: "#3b5998"}}
              title={<Text style={{color: "white"}}>
                      Login with Facebook
                    </Text>}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}
