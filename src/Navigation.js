import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import PayButton from './components/PayButton'

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';
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
      initialRouteName="Wallet"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Pay') {
            return (
              <PayButton 
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            )
          }
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
        component={WalletScreen}
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