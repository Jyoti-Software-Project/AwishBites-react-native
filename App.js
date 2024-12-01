import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native';
import JyotiBites from './src/JyotiBites';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor="#007AFF" />
            <View style={styles.appContainer}>
                {/* <Text>Demo</Text> */}
                <JyotiBites />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appContainer: {
        flex: 1,
    },
});