jest.mock('react-native-is-detox', () => ({
  isDetox: async () => false,
  isDetoxSync: () => false,
}));
