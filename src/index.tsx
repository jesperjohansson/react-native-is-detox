import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-is-detox' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const IsDetoxModule = NativeModules.IsDetox
  ? NativeModules.IsDetox
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

/**
 * @example <caption>Using Promise</caption>
 * isDetox().then(result => console.log('Was app launched by Detox?', result));
 * @example <caption>Using async await</caption>
 * const result = await isDetox();
 * console.log('Was app launched by Detox?', result);
 * @returns Promise with a boolean for whether or not the app was launched by Detox
 */
export function isDetox(): Promise<boolean> {
  return IsDetoxModule.isDetox();
}

/**
 * @example
 * const result = isDetoxSync();
 * console.log('Was app launched by Detox?', result);
 * @returns Boolean for whether or not the app was launched by Detox
 */
export function isDetoxSync(): boolean {
  return IsDetoxModule.isDetoxSync();
}
