// import { StatusBar } from 'expo-status-bar';
import Login from './components/Login';
import Signup from './components/Signup';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
enableScreens();
const Stack = createNativeStackNavigator();

const image = { uri: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' }
export default function App() {
  return (


    <ImageBackground source={image} style={styles.image}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 'null',
    height: 'null',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
