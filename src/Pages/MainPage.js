import React, { useEffect, useState } from 'react';
import { useLinkTo } from '@react-navigation/native';
import { Text, TextInput, View, ScrollView } from 'react-native';
import { requestRecentFilms, requestFrequentFilms, requestSoonFilms } from '../utils/requests';
import Icon from 'react-native-vector-icons/FontAwesome';
import FilmCard from '../Components/FilmCard';
import styles from '../styles/stylesMainPage';
import Loading from '../Components/Loading';
import MainPageFooter from '../Components/MainPageFooter';

const filterText = "What do you want to watch?"

export default function MainPage({ navigation }) {
  const [recentMovies, setRecentMovies ] = useState([]);
  const [frequentMovies, setFrequentMovies ] = useState([]);
  const [soonMovies, setSoonMovies ] = useState([]);
  const [textFilter, setTextFilter] = useState('');

  // splice para separar a metade dos filmes retornados, deixando todos para uma sessão única.
  const recentMoviesAPI = () => {
    requestRecentFilms().then((movies) => setRecentMovies(movies.results.splice(0, 10)));
  }

  const frequentMoviesAPI = () => {
    requestFrequentFilms().then((movies) => setFrequentMovies(movies.results.splice(0, 10)));
  }

  const soonMoviesAPI = () => {
    requestSoonFilms().then((movies) => setSoonMovies(movies.results.splice(0, 10)));
  }
  useEffect(() => {
    recentMoviesAPI();
    frequentMoviesAPI();
    soonMoviesAPI();
  }, [])

  return (
    <>
    <ScrollView style={ styles.mainPageContainer }>
      <View style={ styles.upBar }>
        <Icon
          name="arrow-left"
          size={25}
          style={ styles.backArrow }
          color="#fff"
          onPress={ () => navigation.navigate('Login') }
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

      <ScrollView horizontal={ true }>
      
        {frequentMovies.length != 0 ? <FilmCard movies={ frequentMovies }/>
        : <Loading />}

      </ScrollView>

      <View style={ styles.soonFilms }>
        <Text style={ styles.linkTexts }>Coming soon</Text>
        <Text style={ styles.linkTexts }>All</Text>
      </View>

      <ScrollView horizontal={ true }>
      
        {soonMovies.length != 0 ? <FilmCard movies={ soonMovies }/>
        : <Loading />}

      </ScrollView>

    </ScrollView>

      <MainPageFooter />
      </>
  )
}