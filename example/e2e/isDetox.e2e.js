describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('async result should say its detox', async () => {
    await expect(element(by.id('result-async'))).toHaveText('true');
  });

  it('sync result should say its detox', async () => {
    await expect(element(by.id('result-sync'))).toHaveText('true');
  });
});
