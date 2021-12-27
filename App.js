// import { StatusBar } from 'expo-status-bar';
import Login from './components/Login';
import Signup from './components/Signup';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import { StyleSheet, View, Text } from 'react-native';
enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  return (


      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

//const styles = StyleSheet.create({
//  image: {
//    width: 'null',
//    height: 'null',
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//})
