import React from 'react';
import { View, Text } from 'react-native'
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorite } from '../pages/Favorite/Favorite';

import { Ionicons } from '@expo/vector-icons';
import { StackRoute } from './StackRoute';





export  function Route() {
    
    const {Navigator, Screen } = createBottomTabNavigator();

  return (
    
        <Navigator
          screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#000",
          
          tabBarStyle: {
            backgroundColor: "#4cbe6c"
          }
          }}
        >
        
            <Screen 
            name='StackRoute' 
            component={StackRoute}
            options={{
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
               return <Ionicons name='home' size={size} color={color} />
              }
              return <Ionicons name='home-outline' size={size} color='#fff' />
            }
            }}
            />
            
            <Screen name='Favorito' component={Favorite} options={{ tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
               return <Ionicons name='heart' size={size} color='#ff4141' />
              }
              return <Ionicons name='heart-outline' size={size} color='#fff' />
            } }}  />
            
        </Navigator>
    
  )
}