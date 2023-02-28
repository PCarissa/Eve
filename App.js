/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StoreProvider } from "react-redux";
import Start from "./screens/Start";
import SignIn from "./screens/SignIn";
import Home from './screens/Home.js';
import Hello from './screens/Hello.js'
import Register from './screens/Register.js'
import Pregnant from "./screens/Pregnant"
import DOB from "./screens/DOB"
import Cycle from "./screens/Cycle"
import PCOS from "./screens/PCOS"
import Loading from "./screens/Loading"
import Info from "./screens/Info"
import LogPeriod from "./screens/LogPeriod"
import Entry from "./screens/Entry"
import Symptoms from "./screens/Symptoms"
import Calendar from "./screens/Calendar"
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App () {
 
    return (
    <NavigationContainer>
    <Stack.Navigator>
<<<<<<< HEAD
    {/* <Stack.Screen name="Symptoms" component={Symptoms}options={{headerShown: false}} /> */}
=======
     {/* <Stack.Screen name="Calendar" component={Calendar}options={{headerShown: false}} />  */}
>>>>>>> 0b786f5bfc468f13878db151e77f41f562cb6bc3
    <Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>
    <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
    <Stack.Screen name="Info" component={Info} options={{headerShown: false}}/>
    <Stack.Screen name="Pregnant" component={Pregnant} options={{headerShown: false}}/>
    <Stack.Screen name="DOB" component={DOB}options={{headerShown: false}} />
    <Stack.Screen name="Cycle" component={Cycle} options={{headerShown: false}}/>
    <Stack.Screen name="PCOS" component={PCOS} options={{headerShown: false}}/>
    <Stack.Screen name="Loading" component={Loading} options={{headerShown: false}}/>
    <Stack.Screen name="Hello" component={Hello} options={{headerShown: false}}/> 
    <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
    <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
    <Stack.Screen name="LogPeriod" component={LogPeriod} options={{headerShown: false}}/>
    <Stack.Screen name="Entry" component={Entry}options={{headerShown: false}} />
    <Stack.Screen name="Symptoms" component={Symptoms}options={{headerShown: false}} />
<<<<<<< HEAD
=======
    <Stack.Screen name="Calendar" component={Calendar}options={{headerShown: false}} /> 
>>>>>>> 0b786f5bfc468f13878db151e77f41f562cb6bc3
    </Stack.Navigator>
    </NavigationContainer>
  );
}



{/* <StoreProvider store={store}>
      <View>
        <NavigationProvider />
        </View>
 </StoreProvider>

    
    initialRouteName='Start'*/ }