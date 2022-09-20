import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NativeBaseProvider } from 'native-base';
import store, { persistor } from './redux/store';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

const NativeStackNav = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            <NativeStackNav.Navigator
              initialRouteName="MainPage"
              screenOptions={{ headerShown: false, orientation: 'portrait' }}>
              <NativeStackNav.Screen
                name="FirstScreen"
                component={FirstScreen}
                options={{ animation: 'slide_from_right' }}
              />
              <NativeStackNav.Screen
                name="SecondScreen"
                component={SecondScreen}
                options={{ animation: 'slide_from_left' }}
              />
            </NativeStackNav.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
