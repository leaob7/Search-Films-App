import React, { useEffect, useState } from 'react';
import { useLinkTo } from '@react-navigation/native';
import { Text, TextInput, View, Image } from 'react-native';
import { requestRecentFilms, requestFilmImage, requestFrequentFilms, requestSoonFilms, requestConfigFilms } from '../utils/requests';
import Icon from 'react-native-vector-icons/FontAwesome';
import FilmCard from '../Components/FilmCard';
import styles from '../styles/stylesMainPage';

const filterText = "What do you want to watch?"

export default function MainPage() {
  const [recentMovies, setRecentMovies ] = useState([]);
  const [frequentMovies, setFrequentMovies ] = useState([]);
  const [soonMovies, setSoonMovies ] = useState([]);

  const linkTo = useLinkTo();
  useEffect(() => {
    requestRecentFilms().then((movies) => setRecentMovies(movies.results.splice(0, 3)));

    // requestRecentFilms().then((movies) =>
    // console.log(movies.results.splice(0,3)));

    // requestFrequentFilms().then((movies) => console.log(movies.results));

    // requestSoonFilms().then((movies) => console.log(movies.results));

    // requestFilmImage(634649).then((movies) => console.log(movies));

  })

  return (
    <View style={ styles.mainPageContainer }>
      <View style={ styles.upBar }>
        <Icon
          name="arrow-left"
          size={25}
          style={ styles.backArrow }
          color="#fff"
          onPress={ () => linkTo('/Login') }
        />
        <Text style={ styles.upBarText }>Strazh Cinema</Text>
      </View>

      <View style={ styles.filterContainer } >
        <TextInput style ={ styles.filterInput } placeholder={ filterText } placeholderTextColor="#ababab" />
      </View>

      <View style={ styles.recentFilms }>
        <Text style={ styles.linkTexts }>Recent requests</Text>
        <Text style={ styles.linkTexts }>All</Text>
      </View>

      {recentMovies.length != 0 ? <FilmCard movies={ recentMovies }/>
      : <Text>Loading...</Text>}

      {/* <Image source={ {uri: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"}} style={{width: 40, height: 40}}/> */}


      <View style={ styles.frequentFilms }>
        <Text style={ styles.linkTexts }>Frequent requests</Text>
        <Text style={ styles.linkTexts }>All</Text>
      </View>

      <View style={ styles.soonFilms }>
        <Text style={ styles.linkTexts }>Coming soon</Text>
        <Text style={ styles.linkTexts }>All</Text>
      </View>



    </View>
  )
}