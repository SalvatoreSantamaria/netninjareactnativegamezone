import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../globalStyles/global'

export default function ReviewDetails() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
})