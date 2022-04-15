describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should say its detox', async () => {
    await expect(element(by.id('result'))).toHaveText('true');
  });
});
