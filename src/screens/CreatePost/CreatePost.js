import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

import { CommonStyles } from "../../styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { createPost } from "../../store/actions";

const validationObject = Yup.object({
    title: Yup.string()
        .required("This is a required field")
        .min(6, "Must be between 6 to 54 characters")
        .max(54, "Max 54 characters are allowed"),
    description: Yup.string()
        .required("This is a required field")
        .min(6, "Must be between 6 to 54 characters")
        .max(54, "Max 54 characters are allowed"),
});

const CreatePost = (props) => {
    const { createPost } = props;
    const formikRef = useRef();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const onSubmit = (payload) => {
        let body = {
            title: payload.title,
            body: payload.description,
            userId: 1,
        };

        setLoading(true);

        createPost(body)
            .then((res) => {
                navigation.goBack();
            })
            .catch((err) => {})
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={CommonStyles.flexOne}>
                <Header title="Create Post" />

                <View style={styles.container}>
                    <Formik
                        innerRef={formikRef}
                        initialValues={{ title: "", description: "" }}
                        validationSchema={validationObject}
                        onSubmit={(values, formikActions) => {
                            onSubmit(values);
                        }}
                    >
                        {(formIkProps) => {
                            const {
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                errors,
                                touched,
                            } = formIkProps;

                            return (
                                <>
                                    <Input
                                        placeHolder="Title"
                                        containerStyles={styles.mb30}
                                        placeholder={"Title"}
                                        value={values.title}
                                        onChange={handleChange("title")}
                                        onBlur={handleBlur("title")}
                                        error={touched.title && errors.title}
                                    />
                                    <Input
                                        placeHolder="Description"
                                        wrapperStyles={styles.textArea}
                                        containerStyles={styles.mb30}
                                        multiline={true}
                                        numberOfLines={10}
                                        placeholder={"Description"}
                                        value={values.description}
                                        onChange={handleChange("description")}
                                        onBlur={handleBlur("description")}
                                        error={touched.description && errors.description}
                                    />
                                    <Button onPress={handleSubmit} loading={loading} />
                                </>
                            );
                        }}
                    </Formik>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.flexOne,
        marginHorizontal: 25,
        ...CommonStyles.justifyCenter,
    },
    mb30: {
        marginBottom: 30,
    },
    textArea: {
        height: 210,
        textAlignVertical: "top",
    },
});

const mapDispatchToProps = {
    createPost,
};

export default connect(null, mapDispatchToProps)(CreatePost);
