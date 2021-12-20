import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainPageContainer: {
      backgroundColor: "#2d0f69",
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
      flex: 1,
      flexDirection: "row",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius: 15,
      width: "80%",
      margin: 25,
    },
    filterInput: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#2d0f69",
      fontSize: 18,
      color: "#fff",   
      margin: 10,
    },
    icon: {
      padding: 10,
      paddingRight: 0,
      marginLeft: 10,
    },
    recentFilms: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 30,
      marginTop: 0,
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