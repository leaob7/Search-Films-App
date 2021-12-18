import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 30,
  },
  filmCard: {
    width: 100,
    height: 200,
    marginRight: 20,
  },
  poster: {
    width: 100,
    height: 170,
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 0.5,
  },
  filmCardText:{
    marginTop: 1,
    flex: 1,
    width: "100%",
    color: "#fff",
    // padding: 5,
  },
})
