import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { CommonStyles, Colors } from "../../styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const Login = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Icon name="android" size={200} color={Colors.primary} style={styles.icon} />

                <View>
                    <Input placeHolder="Email" containerStyles={styles.mb28} />
                    <Input placeHolder="Password" containerStyles={styles.mb28} />
                </View>

                <Button style={styles.mt20} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.flexOne,
        backgroundColor: Colors.white,
        padding: 20,
        ...CommonStyles.justifyCenter,
    },
    icon: {
        ...CommonStyles.alignSelfCenter,
        marginTop: 29,
        marginBottom: 30,
    },
    mb28: {
        marginBottom: 28,
    },
    mt20: {
        marginTop: 20,
    },
});

export default Login;
