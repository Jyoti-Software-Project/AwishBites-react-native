import React from "react";
import { Text, View } from "react-native";
import styles from "../../assets/Props/SideBarProps";
import { useDarkMode } from "../../assets/Props/IsDarkMode";

const SideBar = ({ navigation }) => {
    const { darkMode } = useDarkMode();

    return (
        <View style={styles.container}>
            <Text style={{color: darkMode ? "#ffffff" : "#183153"}}>Side Bar</Text>
        </View>
    );
};

export default SideBar;
