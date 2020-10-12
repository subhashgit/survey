import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import {createStackNavigator} from '@react-navigation/stack';
//import {NavigationContainer} from '@react-navigation/native';

import { AntDesign, Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/Dashboard';
import ProjectScreen from './screens/Project';
import PayScreen from './screens/Pay';
//import LoginScreen from './screens/Login';

import NotificationScreen from './screens/Notification';
//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Notifications: {
    lib: Ionicons,
    name:'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name:'setting',
  },
};

 function Navigation() {
  return ( 
    <Tab.Navigator
      initialRouteName="Project"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
        
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#ffffff',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#666',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen 
        name="Wallet"  
        component={ProjectScreen}
        options={{
          title: 'Project',
        }}
      />
     
      <Tab.Screen 
        name="Notifications" 
        component={NotificationScreen}
        options={{
          title: 'Notifications',
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={PayScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  )
}
/*
export default function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="dashboard"
          component={HomeScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/