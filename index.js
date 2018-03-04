import { NativeModules } from 'react-native'

const RNFormSheetManager = NativeModules.RNFormSheetManager || NativeModules.RNFormSheetModule

class FormSheet {

  static present(component, passProps) {
    RNFormSheetManager.present(component, passProps)
  }

  static dismiss() {
    RNFormSheetManager.dismiss()
  }
}

module.exports = FormSheet;
