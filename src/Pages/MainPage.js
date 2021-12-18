import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/stylesMainPage';

const filterText = "What do you want to watch?"

export default function MainPage() {
  return (
    <View style={ styles.mainPageContainer }>
      <View style={ styles.upBar }>
        <Icon name="arrow-left" size={25} style={ styles.backArrow } color="#fff"/>
        <Text style={ styles.upBarText }> Strazh Cinema</Text>
      </View>

      <View style={ styles.filterContainer } >
        <TextInput style ={ styles.filterInput } placeholder={ filterText } placeholderTextColor="#ababab" />
      </View>

      <View style={ styles.recentFilms }>
        <Text style={ styles.linkTexts }>Recent requests</Text>
        <Text style={ styles.linkTexts }>All</Text>
      </View>

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