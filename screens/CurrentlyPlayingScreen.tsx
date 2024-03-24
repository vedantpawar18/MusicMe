import React from 'react';
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export function CurrentlyPlayingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Currently Playing Screen!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // You can change the background color as needed
    },
});
