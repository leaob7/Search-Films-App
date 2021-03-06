import React, { useContext } from 'react';
import { View, Text, ScrollView, FlatList } from "react-native";
import styles from '../styles/stylesMainPage';
import { stylesFav } from '../styles/styleFavoriteMovies';
import MainPageFooter from '../Components/MainPageFooter';
import MyContext from '../Context/Provider';
import FilmCard from '../Components/FilmCard';
import FavoriteList from '../Components/FavoriteList';

export default function FavoriteMovies() {
  const { favorites } = useContext(MyContext);
  return (
    <>
      <ScrollView style={ styles.mainPageContainer }>

        <View style={ stylesFav.upFavBar }>
          <Text style={ stylesFav.upFavText }>Favorites</Text>
        </View>

        <ScrollView horizontal={true} style={ stylesFav.favList }>
        
          {favorites.length != 0 ? <FavoriteList favMovies={ favorites }/>
          : null}

        </ScrollView>

      </ScrollView>
      <MainPageFooter />
    </>
  )
}