import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";

import { Colors } from "./styles";

import { AuthStack, HomeStack } from "./navigation";
import { Loader } from "./components/Loader";
import { getMe } from "./store/actions";

const App = (props) => {
    const { isAuthenticated } = props;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const init = () => {
            let user = AsyncStorage.getItem("user");

            if (user) {
                getMe(user);
            }
            setIsLoading(false);
        };
    }, []);

    const renderStack = () => {
        return isAuthenticated ? <HomeStack /> : <AuthStack />;
    };

    return (
        <>
            <StatusBar backgroundColor={Colors.primary} />
            <NavigationContainer>{isLoading ? <Loader /> : renderStack()}</NavigationContainer>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps)(App);
