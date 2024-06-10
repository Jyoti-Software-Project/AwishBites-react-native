import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../assets/Props/LoginRegisterProps";
import { useDarkMode } from "../../assets/GlobalComponents/IsDarkMode";

const Register = ({ navigation }) => {
    const { darkMode } = useDarkMode();

    const handleNavigation = (route) => {
        navigation.navigate(route);
    };

    return (
        <View style={[styles.container, {backgroundColor: darkMode ? "#183153" : "#ffffff"}]}>
            <View style={styles.formContainer}>
                <ScrollView>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Register</Text>
                        <Text style={[styles.subTitle, {color: darkMode ? "#ffffff" : "#000000"}]}>Create your new account</Text>
                    </View>
                    <View style={styles.navigationContainer}>
                        <Text style={[styles.text, {color: darkMode ? "#ffffff" : "#000000"}]}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={() => handleNavigation('Login')} activeOpacity={0.5}>
                            <Text style={styles.navigationText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default Register;
