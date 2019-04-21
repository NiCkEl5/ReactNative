import React, { Component } from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import { Button, Card, SocialIcon } from 'react-native-elements';

import styles from './Styles/CardStyle'

export default class Card1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <View>
          <Card containerStyle={styles.cardBorder}>
            <View style={styles.flexRow}>
              <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{fontWeight: "bold", fontSize: 22, marginBottom: 10}}>
                  Sit Amet
                </Text>
              </View>
              <View style={{flex:2, alignItems: 'flex-end'}}>
                <Button
                    raised
                    onPress={() => window.alert('Done')}
                    icon={{
                      name: "check", size: 15, color: "red"
                    }}
                    title={<Text style={{color: "red"}}>
                            Done
                          </Text>}
                    type="outline"
                    buttonStyle={styles.dangerButton}
                  />
              </View>
            </View>
            <View style={styles.flexRow}>
              <View style={{flex:1}}>
                <Text style={{fontWeight: "bold"}}>
                  John Doe
                </Text>
              </View>
              <View style={{flex: 2, alignItems: 'center'}}>
                <Text>
                  Active
                </Text>
              </View>
            </View>
            <View style={styles.flexRow}>
              <View style={{flex:1, justifyContent: 'flex-start'}}>
                <View style={{flex:1}}>
                  <Text>
                    From
                  </Text>
                </View>
                <View style={{flex:1}}>
                  <Text>
                    To
                  </Text>
                </View>
              </View>
              <View style={{flex:2, alignItems: 'center'}}>
                <Text style={{marginBottom: 10, alignItems: 'center'}}>
                  {this.props.dateTime}
                </Text>
                <Text style={{marginBottom: 10}}>
                  {this.props.dateTime}
                </Text>
              </View>
              <View style={{flex:1, alignItems: 'flex-end'}}>
                <Button
                    onPress={() => window.alert('Edit2')}
                    icon={{
                      name: "edit", size: 15, color: "gold"
                    }}
                    title={<Text style={{color: "gold"}}>
                            Edit
                          </Text>}
                    type="outline"
                    buttonStyle={styles.warnButton}
                  />
              </View>
            </View>
            <Button
              onPress={() => window.alert('Buton2')}
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
