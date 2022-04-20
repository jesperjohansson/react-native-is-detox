import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { isDetox, isDetoxSync } from 'react-native-is-detox';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    isDetox().then(String).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.bordered}>
          <Text>is Detox (async): </Text>
          <Text testID="result-async">{result}</Text>
        </View>
        <View style={styles.bordered}>
          <Text>is Detox (sync): </Text>
          <Text testID="result-sync">{String(isDetoxSync())}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bordered: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  },
});
