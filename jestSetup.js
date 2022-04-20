jest.mock('react-native-is-detox', () => ({
  isDetox: () => false,
  isDetoxSync: () => false,
}));
