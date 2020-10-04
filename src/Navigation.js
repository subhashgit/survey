import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/Dashboard';
import ProjectScreen from './screens/Project';
import PayScreen from './screens/Pay';
import LoginScreen from './screens/Login';

import NotificationScreen from './screens/Notification';

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

export default function Navigation() {
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