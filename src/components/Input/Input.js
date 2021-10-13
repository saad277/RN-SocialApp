import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

import { Colors, CommonStyles } from "../../styles";

const Input = (props) => {
    const {
        onChange = () => {},
        value,
        placeHolder,
        secureText = false,
        containerStyles = {},
        editable = true,
        keyboardType = "default",
        error = "",
        wrapperStyles = {},
        ...rest
    } = props;

    return (
        <View style={[styles.inputView, containerStyles]}>
            <TextInput
                value={value}
                style={[styles.inputText, wrapperStyles]}
                placeholder={placeHolder}
                placeholderTextColor={Colors.secondary}
                onChangeText={(value) => onChange(value)}
                secureTextEntry={secureText}
                editable={editable}
                keyboardType={keyboardType}
                {...rest}
            />
            {Boolean(error) && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    inputView: {
        ...CommonStyles.justifyCenter,
    },
    inputText: {
        height: 50,
        fontSize: 16,
        color: Colors.black,
        borderWidth: 1.4,
        borderColor: Colors.primary,
        borderRadius: 8,
    },
    error: {
        color: "red",
    },
});

export default Input;
