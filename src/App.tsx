/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MainTabs} from './navigation/Tabs';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <GestureHandlerRootView>
          <Stack.Navigator initialRouteName="/tabs">
            <Stack.Screen
              options={{headerShown: false}}
              name="/tabs"
              component={MainTabs}
            />
          </Stack.Navigator>
        </GestureHandlerRootView>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}

export default App;
