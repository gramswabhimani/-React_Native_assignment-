import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button } from 'react-native'
import Home from '../screen/Home';
import { breakingBad, showFavorite } from '../store/action';
import { BEARKINGBADCAST } from '../const';
import { useDispatch } from 'react-redux';
import { Search } from '../screen/Search';
import { CharacterScreen } from '../screen/CharacterScreen';


const Stack = createNativeStackNavigator();


let MainNavigation = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(breakingBad())
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={Home}
                />
                <Stack.Screen
                    name="SearchScreen"
                    component={Search}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="characterScreen"
                    component={CharacterScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default MainNavigation
