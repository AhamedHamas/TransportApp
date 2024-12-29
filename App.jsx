import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import { ClickCountProvider } from './ClickCountContext';


const RootStack = createNativeStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <RootStack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{ title: 'Sign Up' }}
      />
      <RootStack.Screen
          name="Home"
          options={{ headerShown: false }}
        >
          {(props) => (
            <ClickCountProvider>
              <HomeScreen {...props} /> 
            </ClickCountProvider>
          )}
      </RootStack.Screen>
    </RootStack.Navigator>
  </NavigationContainer>
  );
}