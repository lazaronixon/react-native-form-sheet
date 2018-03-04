#import <React/RCTRootView.h>
#import <React/RCTConvert.h>
#import "RNFormSheetManager.h"
#import "MZFormSheetPresentationController/MZFormSheetPresentationViewController.h"

@implementation RNFormSheetManager{
    RCTBridge *_bridge;
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(present:(NSDictionary *)options) {
    NSString *component = [RCTConvert NSString:options[@"component"]];
    NSInteger width = [RCTConvert NSInteger:options[@"width"]];
    NSInteger height = [RCTConvert NSInteger:options[@"height"]];
    NSDictionary *passProps = [RCTConvert NSDictionary:options[@"passProps"]];
    
    UIViewController *viewController = [[UIViewController alloc] init];
    viewController.view = [[RCTRootView alloc] initWithBridge:self.bridge moduleName:component initialProperties:passProps];
    
    MZFormSheetPresentationViewController *formSheetController = [[MZFormSheetPresentationViewController alloc] initWithContentViewController:viewController];
    formSheetController.presentationController.contentViewSize = CGSizeMake(width, height);
    formSheetController.contentViewControllerTransitionStyle = MZFormSheetPresentationTransitionStyleBounce;
    formSheetController.presentationController.shouldDismissOnBackgroundViewTap = YES;
    formSheetController.presentationController.shouldApplyBackgroundBlurEffect = YES;
    formSheetController.presentationController.shouldCenterVertically = YES;
    formSheetController.contentViewCornerRadius = 8.0;
    formSheetController.shadowRadius = 6.0;
    formSheetController.view.layer.shadowOpacity = 0.1;
    
    [[self topController] presentViewController:formSheetController animated:YES completion:nil];
}

RCT_EXPORT_METHOD(dismiss) {
    [[self topController] dismissViewControllerAnimated:YES completion:nil];
}

- (UIViewController *)topController {
    UIViewController *topController = [UIApplication sharedApplication].keyWindow.rootViewController;
    while (topController.presentedViewController) { topController = topController.presentedViewController; }
    return topController;
}

- (dispatch_queue_t)methodQueue {
    return dispatch_get_main_queue();
}

- (NSArray<NSString *> *)supportedEvents {
    return @[];
}

@end
  
