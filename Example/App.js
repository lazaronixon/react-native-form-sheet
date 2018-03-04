import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import FormSheet from 'react-native-form-sheet';

export default class App extends Component {

  presentFormSheet = () => {
    FormSheet.present({component: 'ModalView', width: 280, height: 380, passProps: {title: 'Hello', message: 'This is modal!'}})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button onPress={this.presentFormSheet} title="Show FormSheet" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
