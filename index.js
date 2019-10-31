import { NativeModules, PixelRatio, Platform } from 'react-native'

const RNFormSheetManager = NativeModules.RNFormSheetManager || NativeModules.RNFormSheetModule

class FormSheet {

  static present(options) {
    if (Platform == 'android') options.width  = PixelRatio.getPixelSizeForLayoutSize(options.width)
    if (Platform == 'android') options.height = PixelRatio.getPixelSizeForLayoutSize(options.height)
    RNFormSheetManager.present({...{ shouldDismissOnBackgroundViewTap: true }, ...options})
  }

  static dismiss() {
    RNFormSheetManager.dismiss()
  }
}

module.exports = FormSheet;
