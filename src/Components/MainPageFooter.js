
import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "../styles/styleMainPageFooter";
import { Link } from "@react-navigation/native";

export default function MainPageFooter() {

  return (
    <View style={{ backgroundColor: "#331177" }}>
      <View style={ styles.footerContainer } >
        <Link to={{ screen: 'MainPage' }}>
          <Icon name="home-outline" size={22} color="#d1b100" />
        </Link>
        <Icon name="videocam-outline" size={22} color="#d1b100" />
        <Link to={{ screen: 'FavoriteMovies' }}>
          <Icon name="star-outline" size={22} color="#d1b100" />
        </Link>
        <Icon name="person-outline" size={22} color="#d1b100" />
      </View>
    </View>
  );
};  
