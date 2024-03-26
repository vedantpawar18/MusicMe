import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";

export function LibraryScreen() {
  const navigation = useNavigation();
  const [stations, setStations] = useState([]);
  
  useEffect(() => {
    fetch("https://musicapi.x007.workers.dev/search?q=Pathaan&searchEngine=gaama")
      .then((response) => response.json())
      .then((data) => {
        setStations(data.response);  
      })
      .catch((error) => {
        console.log("Error fetching stations:", error);
      });
  }, []);

  const renderStationItem = ({ item }) => (
    <TouchableOpacity
      style={styles.stationItem}
      onPress={() => navigation.navigate("CurrentlyPlaying", { station: item })}
    >
      <Image source={{ uri: item.img }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={stations}
        renderItem={renderStationItem}
        keyExtractor={(item, index) => index.toString()}  
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  stationItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
