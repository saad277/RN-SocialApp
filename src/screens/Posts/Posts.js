import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";

import { CommonStyles, Colors } from "../../styles";

import { Header } from "../../components/Header";
import { getPosts } from "../../store/actions";

const Posts = (props) => {
    const { getPosts, posts } = props;

    useEffect(() => {
        getPosts();
    }, []);

    const renderItem = ({ item, index }) => {
        const { title, body } = item;
        return (
            <View style={[styles.card, index === mock.length && styles.mb20]}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{title}</Text>
                    <Text style={styles.fees}>{body}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Header title="Home" />

            <FlatList data={posts} renderItem={renderItem} keyExtractor={(item) => item.id} />
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
    imageContainer: {
        paddingTop: 8,
        ...CommonStyles.alignItemCenter,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 20,
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
    designation: {
        color: "gray",
    },
    timing: {
        marginTop: 8,
        ...CommonStyles.flexRow,
        ...CommonStyles.alignItemCenter,
    },
    time: {
        marginLeft: 5,
        fontSize: 11,
    },
    fees: {
        color: "gray",
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

const mock = [
    { id: 1, name: "Dr.Smith", timing: "10:45 - 9:45", fees: "$10", designation: "Surgeon" },
    { id: 2, name: "Dr.Smith", timing: "10:45 - 9:45", fees: "$10", designation: "Surgeon" },
    { id: 3, name: "Dr.Smith", timing: "10:45 - 9:45", fees: "$10", designation: "Surgeon" },
    { id: 4, name: "Dr.Smith", timing: "10:45 - 9:45", fees: "$10", designation: "Surgeon" },
    { id: 5, name: "Dr.Smith", timing: "10:45 - 9:45", fees: "$10", designation: "Surgeon" },
];
