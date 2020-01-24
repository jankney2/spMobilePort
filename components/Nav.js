import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import {View, FlatList, Text} from 'react-native';
import HomeScreen from './HomeScreen.js'



const AppNav=createStackNavigator({
    Homes:{
        screen:HomeScreen, 
        path:'/home'
    }
}, 
{
// mode:'modal'
// headerMode:'float'
}
)

export default createAppContainer(AppNav)