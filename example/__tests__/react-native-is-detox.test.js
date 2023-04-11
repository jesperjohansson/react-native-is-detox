import '../../jestSetup';
import { isDetox, isDetoxSync } from 'react-native-is-detox';

test('jest mocks', async () => {
  const asyncResult = await isDetox();
  expect(asyncResult).toBe(false);

  const syncResult = isDetoxSync();
  expect(syncResult).toBe(false);
});
