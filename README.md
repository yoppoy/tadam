# Tadam

## Setup
#### Facebook SDK
- [Documentation](https://github.com/facebook/react-native-fbsdk)
- [Guide Android](https://developers.facebook.com/docs/android/getting-started/)
- [Guide IOS](https://developers.facebook.com/docs/ios/getting-started/)

#### Google Signin
[Documentation](https://github.com/react-native-community/react-native-google-signin/tree/master/docs)
- Generate a google-services.json and paste it in /android/app/

### Environment variables
Setup the following environment variables in a `.env` file at the root of the project.

| Env Variable | Description | Example |
|--------------|-------------|---------|
| `API_HOST` | API host address | http://your.api.host.com |
| `FACEBOOK_APP_ID` | Facebook App ID | 252972648810233 |

google-services.json

### Installing
To install all the necessary dependencies :
```
npm install
```
To run the application in development
```
react-native run-android
```

## Build
```
npm run android:build
```

## Docker
In order to run the docker image for the go server :
```
docker build -t tadam .
docker run -d -it -p 80:8080 tadam
```

## Built With

## Authors

* **Yoppoy** - *Shiba lover* - [Cute shiba](https://www.instagram.com/marutaro/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

### NPM tmp fixes :
- RUBY PARSE ERROR: node_modules/@react-native-community/cli-platform-ios/build/link-pods/getDependenciesFromPodfileLock.js
https://github.com/react-native-community/cli/issues/805#issuecomment-543426189
```
node_modules/@react-native-community/cli-platform-ios/build/link-pods/getDependenciesFromPodfileLock.js
Replace
...
return Object.keys((0, _jsYaml().safeLoad)(fileContent)['SPEC CHECKSUMS'] || {});
with the solution provided above:

With
...
const { safeLoad } = require("js-yaml");
const CHECKSUM_KEY = 'SPEC CHECKSUMS';
// Previous portions of the lock file could be invalid yaml.
// Only parse parts that are valid
const tail = fileContent.split(CHECKSUM_KEY).slice(1);
const checksumTail = CHECKSUM_KEY + tail;
return Object.keys(safeLoad(checksumTail)[CHECKSUM_KEY] || {});
```
