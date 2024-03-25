import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import { LibraryScreen } from './screens/LibraryScreen';
import { CurrentlyPlayingScreen } from './screens/CurrentlyPlayingScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

 

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <RootStack.Navigator initialRouteName='Library'>
            <RootStack.Screen 
              name="Library"
              component={LibraryScreen} 
              options={{title:"MyMusic"}}
            /> 
            <RootStack.Screen 
              name="CurrentlyPlaying"
              component={CurrentlyPlayingScreen} 
              options={{presentation:"modal", headerShown:false}}
            /> 
          </RootStack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
