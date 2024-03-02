/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Components/Home';
import Side from './Components/Side';
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <LinearGradient
      colors={[
        'rgba(176,198,243, 1)',
        'rgba(102,112,178, 1)',
        'rgba(165,143,215, 1)',
      ]}>
      <SafeAreaView style={{height: '100%'}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              options={{title: 'Home Page'}}
              component={Home}></Stack.Screen>
            <Stack.Screen
              name="Side"
              options={{title: 'Side Page'}}
              component={Side}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default App;
