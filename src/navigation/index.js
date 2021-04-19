import React from "react";
import CurrentList from '../screens/CurrentList';
import ItemDetails from '../screens/ItemDetails';
import FavouritesList from '../screens/FavouritesList';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform, Text } from 'react-native';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CurrentListStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CurrentList" component={CurrentList} />
            <Stack.Screen
                name="ItemDetails"
                component={ItemDetails}
                options={({ route }) => ({ title: route.params.item.name })} />
        </Stack.Navigator>
    )
}


const FavouritesListStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FavouritesList" component={FavouritesList} />
        </Stack.Navigator>
    )
}

const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        // const image = require('../assets/icons/ios-list.png');
                        let image;
                        const routeName = route.name;
                        if (routeName === "Shopping List") {
                            image = Platform.select({
                                ios: require("../assets/icons/ios-list.png"),
                                android: require("../assets/icons/md-list.png")
                            });
                        } else {
                            image = Platform.select({
                                ios: focused
                                    ? require("../assets/icons/ios-star.png")
                                    : require("../assets/icons/ios-star-outline.png"),
                                android: focused
                                    ? require("../assets/icons/md-star.png")
                                    : require("../assets/icons/md-star-outline.png"),
                            })
                        }

                        return ( 
                                <Image
                                    source={image}
                                    resizeMode='contain'
                                    style={{ width: 25, tintColor: color }}
                                /> 
                        )
                    },
                })}>

                <Tab.Screen
                    name="Shopping List"
                    component={CurrentListStack} />
                <Tab.Screen
                    name="Favourites"
                    component={FavouritesListStack}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Tabs;