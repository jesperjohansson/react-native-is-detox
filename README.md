<a href="https://www.npmjs.com/package/react-native-is-detox">
  <img src="https://img.shields.io/npm/v/react-native-is-detox">
</a>

# react-native-is-detox

Checks whether current app instance is launched by Detox or not

## Installation

```sh
yarn add react-native-is-detox
```

## Usage (async)

```js
import { isDetox } from 'react-native-is-detox';

// ...

const result = await isDetox();

console.log('Was app launched by Detox?', result);
```

```js
import { isDetox } from 'react-native-is-detox';

function App() {
  useEffect(() => {
    isDetox().then((result) => {
      console.log('Was app launched by Detox?', result);
    });
  }, []);

  return <MyApp />;
}
```

## Usage (sync)

```js
import { isDetoxSync } from 'react-native-is-detox';

const result = isDetoxSync();

console.log('Was app launched by Detox?', result);
```

```js
import { isDetoxSync } from 'react-native-is-detox';

function App() {
  useEffect(() => {
    const result = isDetoxSync();
    console.log('Was app launched by Detox?', result);
  }, []);

  return <MyApp />;
}
```

## Mock module in Jest

Import `react-native-is-detox/jestSetup` in your Jest setup file.

```js
import 'react-native-is-detox/jestSetup';
```

## Credits

Original solution by [Simon Buchan](https://stackoverflow.com/users/20135/simon-buchan) from [this comment](https://stackoverflow.com/a/50166137/6886817).

## License

MIT
