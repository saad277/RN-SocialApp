import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import APP_ROUTES from "./routes";
import Posts from "../screens/Posts/Posts";
import CreatePost from "../screens/CreatePost/CreatePost";

const Stack = createStackNavigator();

const routes = [
    {
        name: APP_ROUTES.POSTS,
        screen: Posts,
    },
    {
        name: APP_ROUTES.CREATE_POST,
        screen: CreatePost,
    },
];

export default () => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
            }}
        >
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
