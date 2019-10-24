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
| `GOOGLE_WEB_CLIENT_ID` | /android/app/google-services.json (client > oauth_client > client_id) | ****.apps.googleusercontent.com |
| `GOOGLE_IOS_CLIENT_ID` | IOS client ID | * |

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

## Built With

## Authors

* **Yoppoy** - *Shiba lover* - [Cute shiba](https://www.instagram.com/marutaro/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

### TODO
- IOS : ract native config
- IOS : fb sdk
- IOS : google sign-in
