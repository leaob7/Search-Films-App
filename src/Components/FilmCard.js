import React, { useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from '../styles/styleFilmCards';

export default function FilmCard({ movies }) {
  return (
    <View style={ styles.cardContainer }>
      {movies.map((film) => (
        <View>
          <Image 
            source={{uri: `https://image.tmdb.org/t/p/original/${film.poster_path}`}}
            style={ styles.poster }
          />
          <Text>{film.title}</Text>
          <Text>{film.vote_average}</Text>
        </View>
      ))}
    </View>
  )
} 