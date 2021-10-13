import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";

import { Colors, CommonStyles } from "../../styles";

import { logout } from "../../store/actions";

import PowerIcon from "../../assets/power.png";

const Header = (props) => {
    const { title = "", logout } = props;

    return (
        <View style={styles.container}>
            {/* Alignment */}
            <View style={styles.w30} />
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.mr10} onPress={() => logout()}>
                <Image source={PowerIcon} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.flexRow,
        ...CommonStyles.justifyBetween,
        backgroundColor: Colors.primary,
        height: 65,
        ...CommonStyles.alignItemCenter,
        elevation: 4,
    },
    icon: {
        width: 30,
        height: 30,
    },
    w30: {
        width: 30,
    },
    mr10: {
        marginRight: 10,
    },
    title: {
        fontSize: 20,
    },
});

const mapDispatchToProps = {
    logout,
};

export default connect(null, mapDispatchToProps)(Header);
