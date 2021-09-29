import React from 'react';

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Search from './screens/Search'
import Reels from './screens/Reels'
import Notifications from './screens/Notification'
import Profile from './screens/Profile'
import Home from './screens/Home'

import Cam from './src/cam'
import Dmsg from './src/Dmsg'

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Nav" component={MyTabs} />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Cam" component={Cam} />

        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Dmsg" component={Dmsg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor="gray"
      activeTintColor="black"
      barStyle={{ backgroundColor: 'white', paddingBottom: 10 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarLabel: 'Reels',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-filter-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



