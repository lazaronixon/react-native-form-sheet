import React, { Component } from 'react'
import { Button, View, Text, StyleSheet }from 'react-native'
import FormSheet from 'react-native-form-sheet';

export default class ModalView extends Component {

  dismiss = () => {
    FormSheet.dismiss()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Hello</Text>
        <Text style={styles.p}>This is modal!</Text>
        <Button onPress={this.dismiss} title='Dismiss' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 28,
    paddingBottom: 10,
  },
  p: {
    fontSize: 18,
    paddingBottom: 10,
    textAlign: 'center',
  }
})
