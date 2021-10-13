import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import { CommonStyles, Colors } from "../../styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { login } from "../../store/actions";

const validationObject = Yup.object({
    email: Yup.string()
        .required("This is a required field")
        .email("Please enter a valid email")
        .min(6, "Must be between 6 to 64 characters")
        .max(54, "Max 54 characters are allowed"),
    password: Yup.string()
        .required("This is a required field")
        .min(6, "Password must be between 6 to 54 characters")
        .max(54, "Max 54 characters are allowed"),
});

const Login = (props) => {
    const { login } = props;
    const formikRef = useRef();
    const [loading, setLoading] = useState(false);

    const onSubmit = (values) => {
        setLoading(true);

        login(values)
            .then(() => {})
            .catch((err) => {})
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Icon name="android" size={200} color={Colors.primary} style={styles.icon} />

                <Formik
                    innerRef={formikRef}
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationObject}
                    onSubmit={(values, formikActions) => {
                        onSubmit(values);
                    }}
                >
                    {(formIkProps) => {
                        const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
                            formIkProps;

                        return (
                            <>
                                <View>
                                    <Input
                                        placeholder={"Email Address"}
                                        value={values.email}
                                        onChange={handleChange("email")}
                                        onBlur={handleBlur("email")}
                                        placeHolder="Email"
                                        containerStyles={styles.mb28}
                                        error={touched.email && errors.email}
                                    />
                                    <Input
                                        value={values.password}
                                        onChange={handleChange("password")}
                                        onBlur={handleBlur("password")}
                                        placeHolder="Password"
                                        secureText={true}
                                        containerStyles={styles.mb28}
                                        error={touched.email && errors.password}
                                    />
                                </View>

                                <Button
                                    style={styles.mt20}
                                    onPress={handleSubmit}
                                    loading={loading}
                                />
                            </>
                        );
                    }}
                </Formik>
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

const mapDispatchToProps = {
    login,
};

export default connect(null, mapDispatchToProps)(Login);
