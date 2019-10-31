import { NativeModules, PixelRatio, Platform } from 'react-native'

const RNFormSheetManager = NativeModules.RNFormSheetManager || NativeModules.RNFormSheetModule

class FormSheet {

  static present(options) {
    if (Platform.OS == 'android') options.width  = PixelRatio.getPixelSizeForLayoutSize(options.width)
    if (Platform.OS == 'android') options.height = PixelRatio.getPixelSizeForLayoutSize(options.height)
    RNFormSheetManager.present({...{ shouldDismissOnBackgroundViewTap: true }, ...options})
  }

  static dismiss() {
    RNFormSheetManager.dismiss()
  }
}

module.exports = FormSheet;
