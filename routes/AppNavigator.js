import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
    
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ddd",
          //height: 60,
        },
        headerTintColor: "#444",
      }}
    
    >
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title: "GameZone",
        }}
       />
      <Stack.Screen name="Details" component={ReviewDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);