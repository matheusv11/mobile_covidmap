import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';


import Detail from './pages/Detail';
import Mapa from './pages/Map';

const Stack = createStackNavigator();

const Routes= ()=>{
    return (
        <NavigationContainer>

        <Stack.Navigator initialRouteName="Map" headerMode="none">
            <Stack.Screen name="Map" component={Mapa}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>

        </NavigationContainer>

    )
}

export default Routes;