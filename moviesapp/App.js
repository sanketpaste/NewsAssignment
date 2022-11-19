import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MoviesListScreen from './Screens/MoviesListScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MovieDetailScreen from './Screens/MovieDetailScreen'

const App = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={MoviesListScreen}
        options={{
          headerShown:false
        }} />
        <Stack.Screen name="Detail" component={MovieDetailScreen}
        options={{
         
        }} 
        />
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})