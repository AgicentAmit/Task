import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import RegisterScreen from './src/screens/register';
import {Provider} from 'react-redux';
import store from './src/constants/store';
import DashBoardScreen from './src/screens/dashbord';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, // Remove the header from all screens
          }}>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="register" component={RegisterScreen} />
          <Stack.Screen name="dashboard" component={DashBoardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
