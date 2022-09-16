import React from 'react';
import DrawerMenu from "./DrawerMenu";
import ScreenOne from "./ScreenOne";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ScreenTwo from "./ScreenTwo";
import LoginScreen from "./AuthenticationScreens/Login/LoginScreen";


const Stack = createNativeStackNavigator();
const StackMenu = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: "" }} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: "" }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: "" }} />
            <Stack.Screen name="DrawerScreen" component={DrawerMenu}/>
        </Stack.Navigator>
    );
};

export default StackMenu;

