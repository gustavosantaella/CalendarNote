/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './modules/home/Home';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <GestureHandlerRootView>
          <Stack.Navigator initialRouteName="/Home">
            <Stack.Screen name="/home" component={Home} />
          </Stack.Navigator>
        </GestureHandlerRootView>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}

export default App;
