import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import CheckBox from 'react-native-check-box';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../../assets/Props/LoginRegisterProps";
import { useDarkMode } from "../../assets/GlobalComponents/IsDarkMode";

const Login = ({ navigation }) => {
    const { darkMode } = useDarkMode();

    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [isSecureEntry, setIsSecureEntry] = useState(false);

    const [isChecked, setIsChecked] = useState(false);

    const [submitButton, setSubmitButton] = useState(false);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleEmail = (text) => {
        text = text.toLowerCase().trim();
        setEmail(text);
        if (!text) {
            setErrorEmail("*Email Required*");
            setValidEmail(false);
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
            setErrorEmail("*Invalid Email format*");
            setValidEmail(false);
        }
        else {
            setErrorEmail("");
            setValidEmail(true);
        }
    };

    const toggleShowPassword = () => {
        setIsSecureEntry(!isSecureEntry);
    };

    const handlePassword = (text) => {
        text = text.trim();
        setPassword(text);

        if (!text) {
            setErrorPassword("*Password Required*");
            setValidPassword(false);
        }
        else if (!(/[A-Z]/.test(text))) {
            setErrorPassword("*Password must contain uppercase characters*");
            setValidPassword(false);
        }
        else if (!(/[a-z]/.test(text))) {
            setErrorPassword("*Password must contain lowercase characters*");
            setValidPassword(false);
        }
        else if (!(/\d/.test(text))) {
            setErrorPassword("*Password must contain numeric characters*");
            setValidPassword(false);
        }
        else if (!(/[~!@#$%&*+_-]/.test(text))) {
            setErrorPassword("*Password must contain special characters*");
            setValidPassword(false);
        }
        else if (text.length < 8) {
            setErrorPassword("*Password needs 8 characters*");
            setValidPassword(false);
        }
        else {
            setErrorPassword("");
            setValidPassword(true);
        }
    };

    const handleLogin = async () => {
        try {
            const logout = await AsyncStorage.getItem('logout');
            if (validEmail && validPassword) {
                if (logout === 'logout successfully') {
                    await AsyncStorage.removeItem('logout');
                }
                await AsyncStorage.setItem('login', 'login successfully');
                console.warn("logged in successfully");
                navigation.navigate('Home');
            }
        }
        catch (error) {
            console.error('Error storing login status: ', error);
        }
    };


    useEffect(() => {
        if (validEmail && validPassword) {
            setSubmitButton(true);
            setSubmitButtonDisabled(false);
        }
        else {
            setSubmitButton(false);
            setSubmitButtonDisabled(true);
        }
    }, [validEmail, validPassword]);

    const handleNavigation = (route) => {
        navigation.navigate(route);
    };
 
    return (
        <View style={[styles.container, {backgroundColor: darkMode ? "#183153" : "#ffffff"}]}>
            <View style={styles.formContainer}>
                <ScrollView>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Welcome Back</Text>
                        <Text style={[styles.subTitle, {color: darkMode ? "#ffffff" : "#000000"}]}>Login to your account</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={[styles.input]} value={email} onChangeText={handleEmail} placeholder="Email" placeholderTextColor="#303030" keyboardType="default" />
                        {errorEmail ? ( <Text style={styles.errorText}>{errorEmail}</Text> ) : null}
                    </View>
                    <SafeAreaView style={styles.inputContainer}>
                        <TextInput style={[styles.input, {paddingRight: 40,}]} secureTextEntry={!isSecureEntry} value={password} onChangeText={handlePassword} placeholder="Password" placeholderTextColor="#303030" />
                        <Icon style={styles.icon} name={isSecureEntry ? 'eye' : 'eye-slash'} onPress={toggleShowPassword} size={20} color="#000000" />
                        {errorPassword ? ( <Text style={styles.errorText}>{errorPassword}</Text> ) : null}
                    </SafeAreaView>
                    <View style={styles.textContainer}>
                        <View style={{flexDirection: "row"}}>
                            <CheckBox isChecked={isChecked} onClick={() => { setIsChecked(!isChecked); }} checkBoxColor={darkMode ? "#e1e1e1" : "#303030"} />
                            <Text style={[styles.text, {color: darkMode ? "#ffffff" : "#000000"}]}>&nbsp;Remember me</Text>
                        </View>
                        <Text style={[styles.text, {color: darkMode ? "#ffffff" : "#000000"}]}>Forget Password?</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, {opacity: submitButtonDisabled ? 0.5 : 1}]} onPress={handleLogin} disabled={(!submitButton)} activeOpacity={0.5}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navigationContainer}>
                        <Text style={[styles.text, {color: darkMode ? "#ffffff" : "#000000"}]}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={() => handleNavigation('Register')} activeOpacity={0.5}>
                            <Text style={styles.navigationText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default Login;
