import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainPageContainer: {
      backgroundColor: "#331177",
      height: "100%",
    },
    upBar: {
      flexDirection: "row",
      justifyContent:"flex-start",
      alignItems: "center",
      margin: "auto",
      marginTop: 70,
    },
    backArrow: {
      marginRight: 50,
      marginLeft: 50,
    },
    upBarText: {
      color: "#d1b100",
      fontWeight: "bold",
      fontSize: 20,
      marginRight: 10,
    }, 
    filterContainer: {
      margin: 25,
      alignItems: "center",
    },
    filterInput: {
      backgroundColor: "#331177",
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius: 15,
      fontSize: 20,
      color: "#fff",
      width: "90%",
      height: 70,
      padding: 10,
    },
    recentFilms: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 30,
    },
    frequentFilms: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 30,
    },
    soonFilms: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 30,
    },
    linkTexts: {
      color: "#d1b100",
      fontSize: 20,
    }
})

export default styles;