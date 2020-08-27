/** @format */

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MealsScreen from '../screens/MealsScreen'
import SleepScreen from '../screens/SleepScreen'
import WorkoutsScreen from '../screens/WorkoutsScreen'

const Tab = createMaterialBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='meals'
                    component={MealsScreen}
                    options={{
                        tabBarLabel: 'Meals',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name='food'
                                color={color}
                                size={26}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name='sleep'
                    component={SleepScreen}
                    options={{
                        tabBarLabel: 'Sleep',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name='sleep'
                                color={color}
                                size={26}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name='workout'
                    component={WorkoutsScreen}
                    options={{
                        tabBarLabel: 'Exercise',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name='dumbbell'
                                color={color}
                                size={26}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
