import React, { useEffect } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../../assets/Props/WelcomeProps";
import { useDarkMode } from "../../assets/GlobalComponents/IsDarkMode";

const Welcome = ({ navigation }) => {
    const { darkMode } = useDarkMode();

    const handleAuth = async () => {
        try {
            const login = await AsyncStorage.getItem('login');
            const logout = await AsyncStorage.getItem('logout');
            if (login === 'login successfully') {
                navigation.navigate('Home');
            }
            else if (logout === 'logout successfully') {
                navigation.navigate('Welcome');
            }
        } catch (error) {
            console.error('Error retrieving login status: ', error);
        }
    };
    useEffect(() => {
        handleAuth();
    }, [navigation]);

    return (
        <View style={[styles.container, {backgroundColor: darkMode ? "#183153" : "#ffffff"}]}>
            <View style={[styles.imageContainer]}>
                <ImageBackground style={[styles.image]} source={require("../../assets/Images/awish_bites.webp")} resizeMode="cover">
                    <Text style={styles.imageText}>Awish&nbsp;Bites</Text>
                </ImageBackground>
            </View>
            <View style={[styles.textContainer]}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={[styles.text, {color: darkMode ? "#ffffff" : "#183153"}]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, veritatis rerum magni deleniti nobis aspernatur saepe voluptatem assumenda?</Text>
            </View>
            <View style={[styles.buttonContainer]}>
                <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Login')} activeOpacity={0.6}>
                    <Text style={[styles.buttonText]}>Login&nbsp;</Text><Icon name="sign-in" size={20} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Register')} activeOpacity={0.6}>
                    <Text style={[styles.buttonText]}>Sign up&nbsp;</Text><Icon name="user-plus" size={20} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Welcome;
