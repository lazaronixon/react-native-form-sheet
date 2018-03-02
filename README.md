
# react-native-form-sheet

## Getting started

`$ npm install react-native-form-sheet --save`

### Mostly automatic installation

`$ react-native link react-native-form-sheet`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-form-sheet` and add `RNFormSheet.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNFormSheet.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNFormSheetPackage;` to the imports at the top of the file
  - Add `new RNFormSheetPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-form-sheet'
  	project(':react-native-form-sheet').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-form-sheet/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-form-sheet')
  	```


## Usage
```javascript
import RNFormSheet from 'react-native-form-sheet';

// TODO: What to do with the module?
RNFormSheet;
```
  