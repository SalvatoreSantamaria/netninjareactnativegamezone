import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native'
import React from 'react';
import Home from './screens/home'
import { AppNavigator } from "./routes/AppNavigator";


export default function App() {
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({

});
