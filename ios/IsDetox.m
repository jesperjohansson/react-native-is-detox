#import "IsDetox.h"

@implementation IsDetox

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup {
    return NO;
}

- (BOOL) _isDetox {
    NSArray<NSString *> *args = [[NSProcessInfo processInfo] arguments];
    BOOL argsContainDetox = [args containsObject: @"-detoxServer"];

    return argsContainDetox;
}

RCT_EXPORT_METHOD(isDetox: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject) {
    resolve(@(self._isDetox));
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(isDetoxSync) {
    return @(self._isDetox);
}

@end
