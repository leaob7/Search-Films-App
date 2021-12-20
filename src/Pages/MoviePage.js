import React, { useEffect, useState, useContext } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styleMoviePage';
import { requestFilmDetails } from '../utils/requests';
import Icon from 'react-native-vector-icons/AntDesign';
import { Link } from '@react-navigation/native';
import MainPageFooter from '../Components/MainPageFooter';
import MyContext from '../Context/Provider';

export default function MoviePage({ route }) {
  const { id } = route.params;
  const [movieDetails, setMovieDetails] = useState();
  const [checked, setChecked] = useState(false);
  const { setFavorites } = useContext(MyContext);
  // utilizando contexto para salvar filmes favoritos
  useEffect(() => {
    requestFilmDetails(id).then((details) => setMovieDetails(details));
  }, [])

  const check = () => {
    setChecked(true);
    setFavorites((prevState) => [...prevState, movieDetails]);
  }

  function timeConvert(n) {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return `${rhours}h ${rminutes}m`;
    }

  return (
    <>
    {movieDetails ? 
    <ScrollView style={ styles.moviePageContainer }>
        <View style={ styles.posterContainer }>
          <ImageBackground
            source={{uri: `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}}
            resizeMode="stretch"
            style={ styles.poster }
            imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          >
            <View style={ styles.headerLinks }>
              <Link to={{screen: "MainPage"}} style={ { marginRight: 200 } }>
                <Icon name="arrowleft" size={40} color="#fff" />
              </Link>
              <Link to={{screen: "MainPage"}}>
                <Icon name="close" size={40} color="#fff" />
              </Link>
            </View>


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
                    {index != movieDetails.genres.length - 1
                        ? `${genre.name},` : genre.name}
                  </Text>
                ))}
              </View>

              <View style={ styles.genreView }>
                <Text style={ styles.posterInfoText }>
                  {`${movieDetails.release_date.slice(0, 4)}, ${movieDetails.production_countries[0].iso_3166_1}, ${timeConvert(movieDetails.runtime)}`}

                </Text>
              </View>

              <View style={ styles.watchBtnContainer }>

                <TouchableOpacity style={ styles.watchBtn }>

                  <Text style={ styles.watchText }>Wacth for free</Text>
                  <Icon
                    name="playcircleo"
                    color="#d1b100" size={25} 
                    style={{ marginRight: 15, marginTop: 2 }}
                  />

                </TouchableOpacity>

                <View style={ styles.posterIcon }>
                  <Icon
                    name={ checked ? "star" : 'staro' }
                    color="#fff"
                    size={20}
                    style={{ marginRight: 10 }}
                    onPress={check}
                  />
                  <Icon name="sharealt" color="#fff" size={20} />
                </View>

              </View>

            </View>

          </ImageBackground>
        </View>

        <View style={ styles.movieInfo }>

          <Text style={ { fontSize: 20, marginBottom: 10, color: '#d1b100', fontWeight: "bold"} }>Movie info</Text>

          <Text style={ { fontSize: 15, marginBottom: 10, color: '#fff', fontWeight: '500' } }>{movieDetails.overview}</Text>

        </View>

        <View style={ styles.movieInfo }>
          <Text style={ { fontSize: 20, marginBottom: 10, color: '#d1b100', fontWeight: "bold"} }>Trailer</Text>
          <Text>
            {movieDetails.video}
          </Text>
        </View>

      </ScrollView> : null}

      <MainPageFooter />
    </>
  )
}