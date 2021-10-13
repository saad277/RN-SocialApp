import React from "react";

import { Text, View, StyleSheet } from "react-native";

import { CommonStyles, Colors } from "../../styles";

import { Header } from "../../components/Header";

const Posts = () => {
    return (
        <View style={styles.container}>
            <Header title="Posts" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        ...CommonStyles.flexOne,
    },
});

export default Posts;
