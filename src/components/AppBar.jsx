import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyProductsPage from '../pages/MyProductsPage'
import MyQuotationsPage from '../pages/MyQuotationsPage'
import { icons, COLORS } from '../../constants'

const Tab = createBottomTabNavigator();

const AppBar = ({navigation}) => {
    return (
        <Tab.Navigator
            navigationOptions={{
                showIcon: true,
            }}
            screenOptions={{
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
            }}>
            <Tab.Screen
                name="Productos"
                component={MyProductsPage}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.door}
                        resizeMode='contain'
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: focused ? COLORS.primary : COLORS.gray
                        }}
                    />
                ),
            }}
            />
            <Tab.Screen
                name="Cotizaciones"
                component={MyQuotationsPage}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.calculator}
                        resizeMode='contain'
                        style={{
                            width: 35,
                            height: 35,
                            tintColor: focused ? COLORS.primary : COLORS.gray
                        }}
                    />
                ),
            }}
            />
        </Tab.Navigator>
    )
}

export default AppBar
