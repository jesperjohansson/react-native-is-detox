#import "IsDetox.h"

@implementation IsDetox

RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(isDetox,
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
    NSArray<NSString *> *args = [[NSProcessInfo processInfo] arguments];
    BOOL argsContainDetox = [args containsObject: @"-detoxServer"];

    resolve(@(argsContainDetox));
}

@end
