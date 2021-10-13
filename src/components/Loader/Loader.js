import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { CommonStyles, Colors } from "../../styles";

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={Colors.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.flexOne,
        ...CommonStyles.justifyCenter,
        ...CommonStyles.alignItemCenter,
        backgroundColor: Colors.white,
    },
});

export default Loader;
