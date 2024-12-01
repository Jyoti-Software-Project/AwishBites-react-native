import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkModeProvider } from "../assets/GlobalComponents/IsDarkMode";
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Components/Header";
import Home from './Components/Home';
import Favorite from "./Components/Favorite";
import Cart from "./Components/Cart";
import Notification from "./Components/Notification";
import Profile from "./Components/Profile";

const Stack = createNativeStackNavigator();
const safeAreaInsetsValue = Platform.OS === 'android' ? 0 : 0;

const JyotiBites = () => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const handleAuth = async () => {
            try {
                const login = await AsyncStorage.getItem('login');
                if (login === 'login successfully') {
                    setAuth(true);
                }
                else {
                    setAuth(false);
                }
            }
            catch (error) {
                console.error('Error storing login status: ', error);
            }
        };
        handleAuth();
    }, []);

    const screenOptions = {
        header: ({ route, navigation }) => (
            <Header title={route.params?.title || 'Jyoti-Bites'} backButton={navigation.canGoBack()} navigation={navigation} />
        ),
        headerShown: true,
        headerStyle: {
            elevation: 0,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
        },
        headerBackTitleVisible: false,
        safeAreaInsets: {
            top: safeAreaInsetsValue,
            bottom: safeAreaInsetsValue,
            left: 0,
            right: 0,
        },
    };

    return (
        <DarkModeProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions} initialRouteName={!auth ? "Welcome" : "Home"}>
                    <Stack.Screen name={"Welcome"} component={Welcome} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} initialParams={{ title: 'Login' }} />
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: true }} initialParams={{ title: 'Register' }} />
                    {!auth ? ( 
                        <>
                            <Stack.Screen name="Home" component={Home} options={{ header: ({ route, navigation }) => (
                                <Header title="" backButton={false} navigation={navigation} />
                            ), headerShown: true}} />
                            <Stack.Screen name="Favorite" component={Favorite} options={{ header: ({ route, navigation }) => (
                                <Header title="Favorite" backButton={true} navigation={navigation} />
                            )}} />
                            <Stack.Screen name="Cart" component={Cart} options={{ header: ({ route, navigation }) => (
                                <Header title="Cart" backButton={true} navigation={navigation} />
                            )}} />
                            <Stack.Screen name="Notification" component={Notification} options={{ header: ({ route, navigation }) => (
                                <Header title="Notification" backButton={true} navigation={navigation} />
                            )}} />
                            <Stack.Screen name="Profile" component={Profile} options={{ header: ({ route, navigation }) => (
                                <Header title="Profile" backButton={true} navigation={navigation} />
                            )}} />
                        </>
                    ) : ( <></> )} 
                </Stack.Navigator>
            </NavigationContainer>
        </DarkModeProvider>
    );
};

JyotiBites.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default JyotiBites;
