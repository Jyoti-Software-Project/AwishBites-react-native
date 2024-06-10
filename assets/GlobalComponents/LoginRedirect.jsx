import React, { useEffect } from "react";
import { AsyncStorage } from "react-native";

const LoginRedirect = ({ navigation }) => {
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

    return handleAuth;
};

export default LoginRedirect;
