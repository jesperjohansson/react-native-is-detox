import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { isDetox } from 'react-native-is-detox';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    isDetox().then(String).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>is Detox:</Text>
      <Text testID="result">{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
