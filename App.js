import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { ColorThemeContext } from './src/context/theme_context';
import HomeScreen from './src/containers/MyScreens/PoliticsScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from './src/containers/MyScreens/SportScreen';
import PoliticsScreen from './src/containers/MyScreens/PoliticsScreen';
import SportScreen from './src/containers/MyScreens/SportScreen';
import MoviesScreen from './src/containers/MyScreens/MoviesScreen';
import CrimeScreen from './src/containers/MyScreens/CrimeScreen';
import Home from './src/components/Home';


const RootStack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();



function App() {
  const theme = useContext(ColorThemeContext)

  return (

    
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Homes') {
              iconName = focused
                ? 'boat'
                : 'boat-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle-outline' : 'person-circle';
            }
            else if (route.name === 'AddItem') {
              iconName = focused ? 'add-outline' : 'add';
            }
            else if (route.name === 'People') {
              iconName = focused ? 'people-circle-outline' : 'people-circle';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          showLabel: false,
          tabBarStyle: {
            backgroundColor: theme.Colors.COLOR_CARD,//color you want to change
          }
        })}
        >
          <Tab.Screen name="Homes" component={PoliticsScreen}
            options={{
              title: 'Politics',
              headerTitleStyle: {
                color: theme.Colors.COLOR_FONT,
              },
              headerStyle: {
                backgroundColor: theme.Colors.COLOR_CARD,
              },
            }}
          />
          <Tab.Screen name="Profile" component={SportScreen}
            options={{
              title: 'Sports',
              headerTitleStyle: {
                color: theme.Colors.COLOR_FONT,
              },
              headerStyle: {
                backgroundColor: theme.Colors.COLOR_CARD,
              },
            }} />

          <Tab.Screen name="Movies" component={MoviesScreen}
            options={{
              title: 'Movies',
              headerTitleStyle: {
                color: theme.Colors.COLOR_FONT,
              },
              headerStyle: {
                backgroundColor: theme.Colors.COLOR_CARD,
              },
            }}
          />
          <Tab.Screen name="Crime" component={CrimeScreen}
            options={{
              title: 'Crime',
              headerTitleStyle: {
                color: theme.Colors.COLOR_FONT,
              },
              headerStyle: {
                backgroundColor: theme.Colors.COLOR_CARD,
              },
            }}
          />

        </Tab.Navigator>
  );
}
export default App;