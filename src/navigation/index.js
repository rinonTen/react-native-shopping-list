import React from "react";
import CurrentList from '../screens/CurrentList';
import ItemDetails from '../screens/ItemDetails';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

const CurrentListStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="CurrentList" component={CurrentList} />
                <Stack.Screen
                 name="ItemDetails"
                  component={ItemDetails}
                   options={({route}) => ({ title: route.params.item.name })}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
 
export default CurrentListStack;