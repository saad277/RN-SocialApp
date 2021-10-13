import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import APP_ROUTES from "./routes";
import Posts from "../screens/Posts/Posts";

const Stack = createStackNavigator();

const routes = [
    {
        name: APP_ROUTES.POSTS,
        screen: Posts,
    },
];

export default () => {
    return (
        <Stack.Navigator>
            {routes.map((route, index) => {
                const { name, screen } = route;
                return (
                    <Stack.Screen
                        name={name}
                        component={screen}
                        options={{ headerShown: false }}
                        key={index}
                    />
                );
            })}
        </Stack.Navigator>
    );
};
