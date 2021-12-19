import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styleMoviePage';
import { requestFilmDetails } from '../utils/requests';

export default function MoviePage({ route }) {
  const { id } = route.params;
  const [movieDetails, setMovieDetails] = useState();
  console.log(movieDetails);

  useEffect(() => {
    requestFilmDetails(id).then((details) => setMovieDetails(details));
  }, [])

  return (
    <>
    {movieDetails ? <View style={ styles.moviePageContainer }>
      <View style={ styles.posterContainer }>
        <Text>{movieDetails.title}</Text>
        <Text>{`IMDb ${movieDetails.vote_average}`}</Text>
        {movieDetails.genres.map((genre, index) => (
          <Text key={ index }>
            {genre.name}
          </Text>
        ))}
        <Text>
          {movieDetails.release_date.slice(0, 4)}, 
          {movieDetails.production_countries[0].iso_3166_1},
          {movieDetails.runtime},
        </Text>

        <TouchableOpacity>
          <Text>Wacth for free</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Movie Info</Text>
        <Text>{movieDetails.overview}</Text>
      </View>

      <View>
        <Text>Trailer</Text>
        <Text>
          {movieDetails.video ? movieDetails.video : null}
        </Text>
      </View>

    </View> : null}
    </>
  )
}