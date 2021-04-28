/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import MessageScreen from './src/screens/MesageScreen';
import AddNew from './src/screens/AddNew';

const Stack = createStackNavigator();
const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Home} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="AddCard" component={AddNew} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <StackRoutes />;
};

export default App;
