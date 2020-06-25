import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import RecoverPassword from './pages/RecoverPassword';
import Feed from './pages/Feed';
import Posting from './pages/Posting';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="RecoverPassword" component={RecoverPassword} />
        <AppStack.Screen name="Feed" component={Feed} />
        <AppStack.Screen name="Posting" component={Posting} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
