import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../modules/home/Home';

const Tab = createBottomTabNavigator();
export function MainTabs() {
  return (
    <Tab.Navigator initialRouteName="/home">
      <Tab.Screen
        name="/home"
        options={{
          title: 'Home',
        }}
        component={Home}
      />
      <Tab.Screen name="/notes" component={Home} />
      <Tab.Screen name="/settings" component={Home} />
    </Tab.Navigator>
  );
}
