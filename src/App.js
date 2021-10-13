import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";

import { Colors } from "./styles";

import { AuthStack, HomeStack } from "./navigation";
import { Loader } from "./components/Loader";
import { getMe } from "./store/actions";

const App = (props) => {
    const { getMe } = props;
    const { isAuthenticated } = props;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            let user = await AsyncStorage.getItem("user");

            if (Boolean(user)) {
                getMe(user);
            }
            setIsLoading(false);
        };

        init();
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

const mapDispatchToProps = {
    getMe,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
