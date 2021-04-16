import React from "react";
import CurrentList from '../screens/CurrentList';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

const CurrentListStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Shopping List" component={CurrentList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
// const CurrentListStack = createStackNavigatr({
//     CurrentList: {
//         screen: CurrentList,
//     },
//     // itemDetails: {

//     // }
// })  

export default CurrentListStack;