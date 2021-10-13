import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { CommonStyles, Colors } from "../../styles";

import APP_ROUTES from "../../navigation";
import { Header } from "../../components/Header";
import { getPosts } from "../../store/actions";

const Posts = (props) => {
    const { getPosts, posts } = props;

    const navigation = useNavigation();

    useEffect(() => {
        getPosts();
    }, []);

    const renderItem = ({ item, index }) => {
        const { title, body } = item;
        return (
            <View style={[styles.card, index === posts.length && styles.mb20]}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{title}</Text>
                    <Text style={styles.body}>{body}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Header title="Home" />
            <FlatList data={posts} renderItem={renderItem} keyExtractor={(item) => item.id} />
            <TouchableOpacity
                onPress={() => navigation.navigate(APP_ROUTES.CREATE_POST)}
                style={styles.floating}
            >
                <Ionicon name="add-circle" color={Colors.primary} size={60} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        ...CommonStyles.flexOne,
    },
    mb20: {
        marginBottom: 20,
    },
    card: {
        ...CommonStyles.flexRow,
        backgroundColor: Colors.light,
        elevation: 4,
        marginTop: 16,
        borderRadius: 9,
        marginHorizontal: 20,
    },
    detailsContainer: {
        marginLeft: 15,
        paddingTop: 8,
    },
    name: {
        fontWeight: "bold",
        color: "#607D8B",
        fontSize: 22,
    },
    body: {
        color: "gray",
        marginBottom: 15,
    },
    floating: {
        position: "absolute",
        zIndex: 22,
        bottom: 15,
        right: 15,
    },
});

const mapDispatchToProps = {
    getPosts,
};

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
