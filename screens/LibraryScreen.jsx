import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { getAll } from "react-native-get-music-files";  

export function LibraryScreen() { 
    const navigation = useNavigation();
    const [songs, setSongs] = useState([]);
    console.log("songs",songs)

    useEffect(() => { 
        getAll({
            blured: true,
            artist: true,
            duration: true,
            genre: true,
            title: true,
            cover: true,
            minimumSongDuration: 100,  
        }).then((musicFiles) => {
            setSongs(musicFiles);  
        }).catch((error) => {
            console.log(error);
        });
    }, []);
 
    const renderSongItem = ({ item }) => (
        <TouchableOpacity style={styles.songItem} onPress={() => navigation.navigate("CurrentlyPlaying", { song: item })}>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={songs}  
                renderItem={renderSongItem} 
                keyExtractor={(item) => item.title} 
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    songItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
