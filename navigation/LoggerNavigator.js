/** @format */

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MealsScreen from '../screens/MealsScreen'
import SleepScreen from '../screens/SleepScreen'
import WorkoutsScreen from '../screens/WorkoutsScreen'

const Tab = createMaterialBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Meals' component={MealsScreen} />
                <Tab.Screen name='Sleep' component={SleepScreen} />
                <Tab.Screen name='Work Out' component={WorkoutsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
