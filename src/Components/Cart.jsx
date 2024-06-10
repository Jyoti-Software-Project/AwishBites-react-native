import React from "react";
import { Text, View } from "react-native";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from "../../assets/Props/CartProps";
import { useDarkMode } from './../../assets/GlobalComponents/IsDarkMode';


const Cart = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.cartContainer}>
                <Text>Cart</Text>
            </View>
        </View>
    );
};

export default Cart;
