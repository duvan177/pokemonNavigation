import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home , Profile} from '../views'
import { createStackNavigator } from '@react-navigation/stack';

const Tabs = createBottomTabNavigator();
const HomeStak = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () =>(
    <HomeStak.Navigator>
        <HomeStak.Screen name="Home" component={Home} />
    </HomeStak.Navigator>
)

const ProfileStackScreen = () =>(
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
)

export default function HomeContainer() {
    return (
     
            <Tabs.Navigator>
               <Tabs.Screen  name= "Home" component={HomeStackScreen}/> 
               <Tabs.Screen  name= "Profile" component={ProfileStackScreen}/> 
            </Tabs.Navigator>
     
    )
}
