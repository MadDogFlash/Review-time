import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import About from '../screens/about';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          headerTitle: () => <Header title="About Flash510" navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}
