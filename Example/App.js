import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';

export default class App extends Component {

  showFormSheet = () => {
    alert('formsheet')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button onPress={this.showFormSheet} title="Show FormSheet" />
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
