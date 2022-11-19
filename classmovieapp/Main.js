import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MoviesHome from './movie_screen/MoviesHome'
import DetailsMovie from './movie_screen/DetailsMovie'
 
const Stack = createNativeStackNavigator()
 class Main extends Component {
    
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={MoviesHome}/>
            <Stack.Screen name='MoviesDetail' component={DetailsMovie}
            options={{
              headerShown:false
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Main