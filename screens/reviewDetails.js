import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../globalStyles/global'



export default function ReviewDetails( {navigation, route} ) {
  // use route.params in the latest version of react native
  const { title, body, rating } = route.params
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details</Text>
      <Button title="Go back to home" onPress={() => navigation.goBack()} />
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
})