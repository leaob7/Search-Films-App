import React, { useContext } from 'react';
import { Image, View, Text } from 'react-native';
import { Link } from '@react-navigation/native';
import { styles } from '../styles/styleFilmCards';

export default function FilmCard({ movies }) {
  return (
    <View style={ styles.cardContainer }>
    {/* Optei por utilizar HOFs apenas por questão de preferência visual, fazendo a listagem do array de movies recebido via props */}
      {movies.map((film, index) => (
        <Link to={{ screen: 'MovieDetails', params: { id: film.id } }} key={ index }>
          <View style={ styles.filmCard }>
            <Image 
              source={{uri: `https://image.tmdb.org/t/p/original/${film.poster_path}`}}
              style={ styles.poster }
            />
            <Text style={ styles.filmCardText }>{film.title}</Text>

            <View style={ { flexDirection: "row", justifyContent: "flex-start" } }>
              <Text style={ styles.filmCardText, { color: "#d1b100" } }>IMDB</Text>
              <Text style={ { marginLeft: 10, color: "#fff" } }>
                {film.vote_average}
              </Text>
            </View>

          </View>
        </Link>
      ))}
    </View>
  )
} 