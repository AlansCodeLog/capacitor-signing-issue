import path from "path"
export default {
  "appId": "com.example.app",
  "appName": "test",
  "bundledWebRuntime": false,
  "webDir": "dist",
  "android": {
		"buildOptions": {
			"signingType": "apksigner",
			"keystorePath": path.resolve(`./`, `keystore.jks`),
			"keystorePassword": 123456,
			"keystoreAliasPassword": 123456,
			"keystoreAlias": "key",
			"releaseType": "APK",
		},
	},
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  }
}
