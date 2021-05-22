import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../globalStyles/global'

const Home = ({ navigation }) => {
  // Using code for React Navigation 5 from https://github.com/maximebarber/reviews-app/tree/react-navigation-5/screens
  console.log(navigation.navigate)



  const [reviews, setReviews] = useState([
    {title: 'One', rating: 5, body: 'Body 1', key: '1'},
    {title: 'Two', rating: 4, body: 'Body 2', key: '2'},
    {title: 'Three', rating: 5, body: 'Body 3', key: '3'},
  ])



  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="go to review details" onPress={() => navigation.navigate('Details')}/>
      
      {/* access to destructuring using item below */}
      <FlatList
        data={reviews}
        renderItem={( {item} ) => (
          // send the navigation data thru parameters data via item
          <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 44,
  }
})

export default Home;