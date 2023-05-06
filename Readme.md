# New CRM

### Resource & References
* React native documentation
* Expo documentation 
* Linking the dependencies
https://github.com/react-native-community/cli/blob/main/docs/autolinking.md
* React native material kit docs https://www.react-native-material.com/docs/getting-started

### Environment
* Nodejs 14.17.0
* React 18.2.0
* React native 0.71.7
* React native CLI 2.0.1

### Installation steps

``` code
Check the version of react-native installed
$ react-native -v

Initialize the project
$ npx react-native@latest init crm

Run the app in iOS
$ react-native run-ios
$ pod update
$ pod install

To see the list of packages installed
$ yarn react-native --version

Make a small change in the app.js file and re-run  the application. 

Install material kit and vector icons
$ yarn add @react-native-material/core react-native-vector-icons

Auto-linking the libraries
$ cd ios && pod install && cd .. # CocoaPods on iOS needs this extra step

Run the setup
$ yarn react-native run-ios
$ yarn react-native run-ios — simulator=”iPhone X”

```

### Folder structure
- backend (Nodejs, express, mongodb)
- frontend (React native application)


### Installing material-kit and linking to assets folder

As manual linking has been removed from react-native from version 0.69 in favor of auto-linking, you will have to link your assets in native module or use react-native-asset

``` 
File: react-native.config.js

module.exports = {
    project: {
        ios: {},
        android: {}
    },
    assets: ['./src/assets/'],
};

Now, run
$ npx react-native-asset

```


### Installing Mongo DB docker community edition
```
First check if docker is installed and is running
$ docker -v

Pull the Mongo DB docker image
$ docker pull mongodb/mongodb-community-server

Run the image as container, container is accessible with container name "mongo"
$ docker run --name mongo -d mongodb/mongodb-community-server:latest

Run the image as a container exposing the ports and container is accessed via localhost:27017
$ docker run --name mongo -p 27017:27017 -v ./data/db:/data/db mongodb/mongodb-community-server:latest mongod

```

### Redux
* Flow of the application
    * actions call a reducer
    * reducer changes the state
    * changed state is then rendered in the component

```
Now, add the following libraries and import it in app
$ yarn add redux redux-thunk react-redux
```

### React native debugger
* Ref https://reactnative.dev/docs/debugging
* Ref https://github.com/jhen0409/react-native-debugger/blob/master/docs/getting-started.md

```
# Installing react native debugger
$ brew install --cask react-native-debugger

# Next, head over to the Chrome Web Store and install the Redux DevTools [https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en] .

# Finally install dev dependencies
$ npm install redux-devtools-extension remote-redux-devtools

# Launch RN Debugger 
$ open "rndebugger://set-debugger-loc?host=localhost&port=8081"

From the iOS simulator press CMD + D and press Remote JS Debugging. (ctrl + M from windows)

# To see the state from the application, 

```

# Clear the cache from Metro Server
```
$ yarn start --reset-cache
```

