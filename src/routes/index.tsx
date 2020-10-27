import React, { Component } from 'react'
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Home, Login , CreateAccount} from '../views'
import HomeContainer from './HomeContainer'
import LoginContainer from './LoginContainer'


const AuthStak = createStackNavigator()

export default function Root (){

    return(
        <NavigationContainer>
            <AuthStak.Navigator screenOptions={{
               headerShown:false
            }}>
                <AuthStak.Screen name="Login" component={LoginContainer} />
                <AuthStak.Screen name="Home" component={HomeContainer} />
            </AuthStak.Navigator>
        </NavigationContainer>

    )

}