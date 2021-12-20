import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
  },
  filmCard: {
    width: 100,
    height: 250,
    marginRight: 50,
  },
  poster: {
    alignSelf: "flex-start",
    width: 120,
    height: 170,
    borderRadius: 20,
    borderWidth: 0.5,
    marginBottom: 20,
  },
  filmCardText:{
    justifyContent: "center",
    marginTop: 1,
    fontSize: 13,
    color: "#fff",
    marginBottom: 10,
  },
})
