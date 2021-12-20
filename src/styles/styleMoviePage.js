import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerLinks: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  moviePageContainer: {
    backgroundColor: "#2d0f69",
  },
  posterContainer: {
    borderRadius: 20,
  },
  poster: {
    justifyContent: "center",
    height: 400,
    width: "100%",
  },
  ratingView: {
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 20,
    color: "#d1b100",
    fontWeight: "bold",
    marginRight: 5,
    textAlign: "center",
  },
  infoView: {
    marginTop: "25%",
    margin: 30,
  },
  movieTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 7,
  },
  posterInfoText: {
    color: "#fdfdfd",
    fontSize: 15,
    marginTop: 7,
    marginRight: 5,
    fontWeight: '400'
  },
  genreView: {
    flexDirection: "row",
    marginRight: 5,
  },
  watchBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  watchBtn: {
    flexDirection: "row",
    backgroundColor: '#6325df',
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    borderRadius: 15,
    textAlign: "center",
    marginTop: 30,
    width: 200,
  },
  watchText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    margin: 5,
    marginLeft: 15,
  },
  posterIcon: {
    flexDirection: "row",
    marginTop: 30,
  },
  movieInfo: {
    justifyContent: "center",
    margin: 20,
  },
})