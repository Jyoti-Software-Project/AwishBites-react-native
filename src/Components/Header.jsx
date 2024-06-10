import React, { useEffect, useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../../assets/Props/HeaderProps";
import { useDarkMode } from "../../assets/GlobalComponents/IsDarkMode";

const Header = ({ navigation, title, backButton }) => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [isLogin, setIsLogin] = useState(false);

    const handleGoBack = () => {
        if (backButton) {
            navigation.goBack();
        }
    };

    const handleLeftSidebar = () => {
        if (!backButton) {
            Alert.alert("menu");
        }
    };

    const handleLogout = async () => {
        try {
            const login = await AsyncStorage.getItem('login');
            if (login === 'login successfully') {
                await AsyncStorage.removeItem('login');
                await AsyncStorage.setItem('logout', 'logout successfully');
            }
            setIsLogin(false);
            console.warn("logged out successfully");
            navigation.navigate('Welcome');
        }
        catch (error) {
            console.error('Error storing login status: ', error);
        }
    };

    useEffect(() => {
        const handleAuth = async () => {
            try {
                const login = await AsyncStorage.getItem('login');
                const logout = await AsyncStorage.getItem('logout');
                if (login === 'login successfully') {
                    setIsLogin(true);;
                }
                else if (logout === 'logout successfully') {
                    setIsLogin(false);;
                }
            }
            catch (error) {
                console.error('Error storing login status: ', error);
            }
        };
        handleAuth();
    }, []);

    return (
        <View style={styles.header}>
            <View style={styles.titleBtnContainer}>
                <TouchableOpacity style={styles.titleBtnContainer} onPress={backButton ? handleGoBack : handleLeftSidebar} activeOpacity={0.6}>
                    <Icon name={backButton ? 'chevron-left' : 'bars'} style={styles.backButton} size={20} color="#ffffff" />
                    <Text style={styles.title}>&nbsp;{title}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={toggleDarkMode} activeOpacity={0.6}>
                    <Icon name={darkMode ? 'moon-o' : 'sun-o'} size={25} color={darkMode ? "#fafafa" : "#ffd43b"} />
                </TouchableOpacity>
                { !isLogin ? '' :
                    <TouchableOpacity style={{marginLeft: 20}} onPress={handleLogout} activeOpacity={0.6}>
                        <Icon name='sign-out' size={25} color={darkMode ? "#fafafa" : "#ffd43b"} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

export default Header;
