import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux/store';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import {NativeBaseProvider} from 'native-base';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="MainPage"
              screenOptions={{headerShown: false, orientation: 'portrait'}}>
              <Stack.Screen
                name="My First Screen"
                component={FirstScreen}
                options={{animation: 'slide_from_right'}}
              />
              <Stack.Screen
                name="My Second Screen"
                component={SecondScreen}
                options={{animation: 'slide_from_left'}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
