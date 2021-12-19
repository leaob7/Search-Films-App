import { useLinkTo } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../styles/styleMainPageFooter";
import { Link } from "@react-navigation/native";

export default function MainPageFooter() {

  return (
    <View style={ styles.footerContainer } >
      <Link to={{ screen: 'MainPage' }}>
        <Icon name="home" size={25} color="#d1b100" />
      </Link>
      <Icon name="film" size={25} color="#d1b100" />
      <Icon name="star" size={25} color="#d1b100" />
      <Icon name="user" size={25} color="#d1b100" />
    </View>
  );
};
