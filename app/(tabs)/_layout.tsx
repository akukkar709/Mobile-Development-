import { Tabs } from 'expo-router';
import {Ionicons }from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (<Ionicons size={28} name="home" color={color} />
          ),
        }}

      />

      <Tabs.Screen
      name="settings"
      options={{
        title: 'Settings',
        tabBarIcon: ({ color }) => <Ionicons size={28} name="settings" color={color} />
          
      }}
      />

     <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
