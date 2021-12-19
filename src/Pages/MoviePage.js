import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styleMoviePage';
import { requestFilmDetails } from '../utils/requests';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <ImageBackground
          source={{uri: `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}}
          resizeMode="stretch"
          style={ styles.poster }
          imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        >
          <View style={ styles.infoView }>

            <Text style={ styles.movieTitle }>{movieDetails.title}</Text>

            <View style={ styles.ratingView }>
              <Text style={ styles.ratingText }>
                IMDb
              </Text>
              <Text style={ { color: "#fff", fontSize: 15, fontWeight: "bold", marginTop: 3 } }>
                {movieDetails.vote_average}
              </Text>
            </View>

            <View style={ styles.genreView }>
              {movieDetails.genres.map((genre, index) => (
                <Text style={ styles.posterInfoText } key={ index }>
                  {genre.name}, 
                </Text>
              ))}
            </View>

            <View style={ styles.genreView }>
              <Text style={ styles.posterInfoText }>
                {`${movieDetails.release_date.slice(0, 4)}, ${movieDetails.production_countries[0].iso_3166_1}, ${movieDetails.runtime}`}

              </Text>
            </View>

            <View style={ styles.watchBtnContainer }>

              <TouchableOpacity style={ styles.watchBtn }>

                <Text style={ styles.watchText }>Wacth for free</Text>
                <Icon
                  name="play-circle"
                  color="#d1b100" size={25} 
                  style={{ marginRight: 15, marginTop: 2 }}
                />

              </TouchableOpacity>

              <View style={ styles.posterIcon }>
                <Icon name="star" color="#fff" size={20} style={{ marginRight: 10 }} />
                <Icon name="share-alt" color="#fff" size={20} />
              </View>

            </View>

          </View>

        </ImageBackground>
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