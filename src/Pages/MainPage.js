import React, { useEffect, useState } from 'react';
import { useLinkTo } from '@react-navigation/native';
import { Text, TextInput, View, ScrollView } from 'react-native';
import { requestRecentFilms, requestFilmImage, requestFrequentFilms, requestSoonFilms, requestConfigFilms } from '../utils/requests';
import Icon from 'react-native-vector-icons/FontAwesome';
import FilmCard from '../Components/FilmCard';
import styles from '../styles/stylesMainPage';
import Loading from '../Components/Loading';

const filterText = "What do you want to watch?"

export default function MainPage() {
  const [recentMovies, setRecentMovies ] = useState([]);
  const [frequentMovies, setFrequentMovies ] = useState([]);
  const [soonMovies, setSoonMovies ] = useState([]);

  const linkTo = useLinkTo();
  useEffect(() => {
    // splice para separar a metade dos filmes retornados, deixando todos para uma sessão única.
    // requestRecentFilms().then((movies) => setRecentMovies(movies.results.splice(0, 10)));

    // requestFrequentFilms().then((movies) => console.log(movies.results));

    // requestSoonFilms().then((movies) => console.log(movies.results));

    // requestFilmImage(634649).then((movies) => console.log(movies));

  })

  return (
    <ScrollView style={ styles.mainPageContainer }>
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
      <ScrollView horizontal={ true }>
      
        {recentMovies.length != 0 ? <FilmCard movies={ recentMovies }/>
        : <Loading />}

      </ScrollView>

      <View style={ styles.frequentFilms }>
        <Text style={ styles.linkTexts }>Frequent requests</Text>
        <Text style={ styles.linkTexts }>All</Text>
      </View>

      <View style={ styles.soonFilms }>
        <Text style={ styles.linkTexts }>Coming soon</Text>
        <Text style={ styles.linkTexts }>All</Text>
      </View>



    </ScrollView>
  )
}