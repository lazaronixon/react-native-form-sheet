import { NativeModules } from 'react-native'

const RNFormSheetManager = NativeModules.RNFormSheetManager || NativeModules.RNFormSheetModule

class FormSheet {

  static present(options) {
    const defaults = { shouldDismissOnBackgroundViewTap: true }
    RNFormSheetManager.present({...defaults, ...options})
  }

  static dismiss() {
    RNFormSheetManager.dismiss()
  }
}

module.exports = FormSheet;
