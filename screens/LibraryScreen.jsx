import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, SafeAreaView, FlatList, Image, View } from "react-native";
import { fetchStations } from "../services/stationService";
import { styles } from "../styles/libraryStyles";
import { Video, ResizeMode } from 'expo-av';

export function LibraryScreen() {
  const navigation = useNavigation();
  const [stations, setStations] = useState([]);
  const [response, setResponse] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    async function fetchStationsData() {
      const data = await fetchStations();
      setStations(data);
    }
    fetchStationsData();
  }, []);

  const handlePlayPause = async (item) => {
    console.log(item.id);
    try {
      const response = `https://musicapi.x007.workers.dev/fetch?id=205659dc7589f400defc73f6918b369759cd3b88cfaef01c5af3c98af7e10d683d55756d7191f1217deea14ee68a618ca8aba082073c68e1b8bef0b3aa416375&searchEngine=seevn`;
      setResponse(response);
      setIsPlaying(!isPlaying);  
    } catch (error) {
      console.log("Error fetching song:", error);
    }
  
    setStations((prevStations) =>
      prevStations.map((station) =>
        station.id === item.id ? { ...station, isPlaying: !station.isPlaying } : station
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}> 
      {response && isPlaying && (
        <View style={{ display: 'none' }}>
          <Video
            source={{ uri: response }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay={isPlaying}
            isLooping={false}
            style={{ width: 0, height: 0 }}
          />
        </View>
      )}
 
      <FlatList
        data={stations}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.stationItem}
            onPress={() => navigation.navigate("CurrentlyPlaying", { station: item })}
          >
            <Image source={{ uri: item.img }} style={styles.image} />
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => handlePlayPause(item)}
            >
              <Image
                source={item.isPlaying ? require("../assets/pause.png") : require("../assets/play.png")}
                style={styles.playIcon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()} 
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}
