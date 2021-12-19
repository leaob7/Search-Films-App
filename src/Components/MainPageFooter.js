import { useLinkTo } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../styles/styleMainPageFooter";

export default function MainPageFooter() {
  const linkTo = useLinkTo();

  return (
    <View style={ styles.footerContainer } >
      <Icon name="home" size={25} color="#d1b100" onPress={ linkTo('/MainPage') } />
      <Icon name="film" size={25} color="#d1b100" />
      <Icon name="star" size={25} color="#d1b100" />
      <Icon name="user" size={25} color="#d1b100" />
    </View>
  );
};
