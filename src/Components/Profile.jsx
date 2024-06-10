import React, { useState } from "react";
import { Button, SafeAreaView, StatusBar, Text, View } from "react-native";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from "../../assets/Props/ProfileProps";
import { useDarkMode } from './../../assets/GlobalComponents/IsDarkMode';

const Profile = () => {
    const [hidden, setHidden] = useState(false);

    const changeStatusBarVisibility = () => setHidden(!hidden);

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <SafeAreaView>
                    <StatusBar animated={true} backgroundColor="#007AFF" hidden={hidden} />
                    <Button title="Status-Bar" onPress={changeStatusBarVisibility} />
                </SafeAreaView>
                <Text>Profile</Text>
            </View>
        </View>
    );
};

export default Profile;
