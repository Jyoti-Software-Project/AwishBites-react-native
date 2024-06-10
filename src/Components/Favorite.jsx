import React from "react";
import { Text, View } from "react-native";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from "../../assets/Props/FavoriteProps";
import { useDarkMode } from './../../assets/GlobalComponents/IsDarkMode';

const Favorite = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.favoriteContainer}>
                <Text>Favorite</Text>
            </View>
        </View>
    );
};

export default Favorite;
