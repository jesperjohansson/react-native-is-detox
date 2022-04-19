# react-native-is-detox

Checks whether current app instance is launched by Detox or not

## Installation

```sh
yarn add react-native-is-detox
```

## Usage

```js
import { isDetox } from 'react-native-is-detox';

// ...

const result = await isDetox();
```

```js
import { isDetox } from 'react-native-is-detox';

function App() {
  useEffect(() => {
    isDetox().then((result) => {
      if (result) {
        console.log('Is Detox');
        LogBox.ignoreAllLogs(true);
      }
    });
  }, []);

  return <MyApp />;
}
```

## Credits

Original solution by [Simon Buchan](https://stackoverflow.com/users/20135/simon-buchan) from [this comment](https://stackoverflow.com/a/50166137/6886817).

## License

MIT
