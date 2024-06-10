import React from "react";
import { Text, View } from "react-native";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from "../../assets/Props/NotificationProps";
import { useDarkMode } from './../../assets/GlobalComponents/IsDarkMode';

const Notification = () => {
    return (
        <View style={styles.container}>
            <View style={styles.notificationContainer}>
                <Text>Notification</Text>
            </View>
        </View>
    );
};

export default Notification;
