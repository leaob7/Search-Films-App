import React from 'react';
import { View, Image, Text, FlatList, ScrollView } from 'react-native';
import { Link } from '@react-navigation/native';
import {styles} from '../styles/styleFavoriteList';
import Loading from '../Components/Loading';

export default function FavoriteList({ favMovies }) {

  const renderItem = ({ item, index }) => (
      <Link
        to={{ screen: 'MovieDetails', params: { id: item.id } }}
        style={ styles.itemContainer }
      >
        <View key={ index } style={ styles.favCard }>
          <Image 
            source={{uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`}}
            style={ styles.posterItem }
          />

          <View style={ styles.posterText }>
            <Text style={ styles.title }>{item.title}</Text>
            <View style={ styles.posterDesc }>
              <Text style={ { color: "#d1b100" } }>IMDB</Text>
              <Text style={ { marginLeft: 10, color: "#fff" } }>
                {item.vote_average}
              </Text>
            </View>
          </View>

        </View>
      </Link>
  )

  return(
    <FlatList
      data={favMovies}
      renderItem={renderItem}
      onEndReachedThreshold={0.1}
      scrollEnabled={false}
    />
  )
}