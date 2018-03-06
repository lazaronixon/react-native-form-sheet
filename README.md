# React Native Form Sheet
A native dialog solution for React Native (wrapper over ![MZFormSheetPresentationController](https://github.com/m1entus/MZFormSheetPresentationController) and ![Dialogs](https://developer.android.com/guide/topics/ui/dialogs.html)).

![React Native Form Sheet](https://raw.githubusercontent.com/lazaronixon/react-native-form-sheet/master/Example/screenshots/formSheetExample.gif)

## Getting started
```
$ npm install react-native-form-sheet --save
$ react-native link
```

### Installation iOS
Drop `MZFormSheetPresentationController.framework` and `MZAppearance.framework` from `/node_modules/react-native-form-sheet/ios/` to XCode Embedded Binaries and then check `"Copy items if need"` when it is prompted.
[Install MZFormSheetPresentationController](https://raw.githubusercontent.com/lazaronixon/react-native-form-sheet/master/Example/screenshots/FormSheetTutoIOS.jpg)

### Installation Android
No Steps.

### Warning
This component only applies to projects made with react-native init or to those made with Create React Native App which have since ejected. For more information about ejecting, please see the ![guide](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md) on the Create React Native App repository.

## Basic Usage
```javascript
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import FormSheet from 'react-native-form-sheet';

export default class App extends Component {

  presentFormSheet = () => {
    FormSheet.present({component: 'ModalView', width: 280, height: 380})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button onPress={this.presentFormSheet} title='Show FormSheet' />
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
```
