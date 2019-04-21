import React, { Component } from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import styles from './Styles/CardStyle'

export default class Card1 extends Component {

  render() {
      return (
        <View>
          <Card containerStyle={styles.cardBorder}>
            <View style={styles.flexRow}>
              <View style={{flex:1, justifyContent: 'center'}}>
                <Text style={{fontWeight: "bold", fontSize: 22, marginBottom: 10}}>
                  Lorem impsum
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
              <Button
                  raised
                  onPress={() => window.alert('Edit1')}
                  icon={{
                    name: "edit",
                    size: 15,
                    color: "red"
                  }}
                  title={<Text style={{color: "red"}}>
                          Edit
                        </Text>}
                  type="outline"
                  buttonStyle={styles.dangerButton}
                />
              </View>
            </View>
            <View style={styles.flexRow}>
              <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{fontWeight: "bold", marginBottom: 10}}>
                  Left 1.
                </Text>
              </View>
              <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <Text style={{marginBottom: 10}}>
                  Right 1.
                </Text>
              </View>
            </View>
            <Button
              onPress={() => window.alert('Buton1')}
              icon={{
                name: "add",
                size: 15,
                color: "white"
              }}
              buttonStyle={styles.buttonAdd}
              title='Button' />
          </Card>
        </View>
      )
    }
  }
