
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#2d0f69",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginTitle: {
    marginBottom: 30,
    color: "white",
  },
  titleText: {
    textAlign: "center",
    fontSize: 25,
    color: "#fff",
    marginBottom: 10,
  },
  titleTextDesc: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#d1b100",
    marginBottom: 10,
  },
  loginForm: {
    backgroundColor: "#411697",
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    height: 60,
    marginBottom: 20,
    borderRadius: 10,
  },
  loginInput: {
    flex: 1,
    color: "#fff",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    margin: 10,
  },
  icon: {
    paddingLeft: 30,
  },
  formBtn: {
    justifyContent: "center",
    backgroundColor: "#6325df",
    color: "#fff",
    padding: 5,
    borderRadius: 10,
    margin: 7,
    marginTop: 20,
    width: 300,
    height: 60,
  },
  textBtn: {
    color: "#ababab",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  middleView: {
    flexDirection: "row",
    alignItems: "center",
  },
  middleText: {
    fontSize: 15,
    color: "#d1b100",
    margin: 10,
    marginBottom: 30,
  },
  socialLogin: {
    flexDirection: "row",
    justifyContent: "center",
  },
  line: {
    marginBottom: 15,
    borderBottomColor: '#d1b100',
    borderBottomWidth: 1,
    width: "25%",
  },
  iconBack: {
    backgroundColor: "#411697",
    borderRadius: 20,
    padding: 25,
    margin: 10,
  },
});

export default styles;