import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  playButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto", 
  },
  playIcon: {
    width: 40,
    height: 40,
  },
  titleContainer: {
    flex: 1,
    marginRight: 30, 
  },
  progressBarContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#ddd',
    height: 5,
    borderRadius: 2,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 2,
  },
});