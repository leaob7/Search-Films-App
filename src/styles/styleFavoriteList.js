import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flatList: {
    marginBottom: 20,
  },
  itemContainer: {
    height: 100,
    marginLeft: 20,
    marginRight: 50,
    marginBottom: 10,
  },
  favCard: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
    marginLeft: 10,
  },
  posterItem: {
    resizeMode: "stretch",
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  posterText: {
    flexDirection: "column",
    justifyContent: "center",
    margin: 10,
  },
  posterDesc: {
    flexDirection: "row",
  },
  title: {
    color: "#fff",
  }
});
