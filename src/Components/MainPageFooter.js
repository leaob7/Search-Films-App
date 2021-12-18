import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../styles/styleMainPageFooter";
import { useLinkTo } from "@react-navigation/native";

export default function MainPageFooter() {
  const linkTo = useLinkTo();
  return (
    <View style={ styles.footerContainer } >
      <Icon name="home" size={25} color="#d1b100" style={ styles.footerIcon } />
      <Icon name="film" size={25} color="#d1b100" style={ styles.footerIcon } />
      <Icon name="star" size={25} color="#d1b100" style={ styles.footerIcon } />
      <Icon name="user" size={25} color="#d1b100" style={ styles.footerIcon } />
    </View>
  );
};
