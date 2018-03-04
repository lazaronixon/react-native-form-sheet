import { NativeModules } from 'react-native'

const RNFormSheetManager = NativeModules.RNFormSheetManager || NativeModules.RNFormSheetModule

class FormSheet {

  static present(options) {
    RNFormSheetManager.present(options)
  }

  static dismiss() {
    RNFormSheetManager.dismiss()
  }
}

module.exports = FormSheet;
