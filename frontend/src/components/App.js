/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import {Provider} from 'react-redux'
import store from '../app/store'
import PeopleList from './PeopleList'

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


import Home from "../screens/Home"
import About from "../screens/About"
import UserData from "../screens/UserData"
import Contact from "../screens/Contact"
import Course from "../screens/Course"

//import NavigationRoot from './NavigationRoot';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store} >
      {/* <View style={styles.container}> */}
          {/* <Text style={styles.highlight}>CRM</Text> */}
          {/* <PeopleList /> */}
          {/* <NavigationRoot/> */}
      {/* </View> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen name="Home" 
          options={{
            headerShown: false,
          }}>
            {(props) => <Home {... props} channelName={"YTube"} />}
          </Stack.Screen>

        {/* Course Screen  */}
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />

        {/* UserData Screen  */}
        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Students Data",
            headerTitleAlign: "center",
          }}
        />

        {/* About Screen  */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />

        {/* Contact Screen  */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({

});

export default App;
