import React, { useContext, useState } from 'react';
import { useLinkTo } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styleLogin';
import MyContext from '../Context/Provider';

export default function Login({ navigation }) { 
  const linkTo = useLinkTo();
  const {setEmail} = useContext(MyContext);
  const [password, setPassword] = useState('');
  // utilizando context em email para informções da tela de perfil

  function validateLogin() {
    // validação extremamente simples apenas para o comportamento do app
    // email.includes('@' && '.com') && password.length >= 4 ? linkTo('/MainPage') : null;
    linkTo('/MainPage');
  }
  return (
    <View style={ styles.loginContainer }>
      <View style={ styles.loginTitle }>
        <Text style={ styles.titleText }>Welcome</Text>
        <Text style={ styles.titleTextDesc }>Log in to the cinema</Text>
      </View>

      <View style={ styles.loginForm }>
        <TextInput
          style={ styles.loginInput }
          placeholder="E-mail"
          placeholderTextColor="#ababab"
          onChangeText={ (e) => setEmail(e) }
        />
        <TextInput
          style={ styles.loginInput }
          placeholder="Password"
          placeholderTextColor="#ababab"
          onChangeText={ (e) => setPassword(e) }
          secureTextEntry
        />
        <TouchableOpacity style={ styles.formBtn } onPress={ validateLogin }>
          <Text style={ styles.textBtn }>Login</Text>
        </TouchableOpacity>
      </View>

    <View style={ styles.middleView } >
      <View style={ styles.line } />
      <Text style={ styles.middleText }>
        OR using
        </Text>
      <View style={ styles.line } />
    </View>

      <View style={ styles.socialLogin }>
        <View style={ styles.iconBack }>
          <Icon name="google-plus" size={25} color="#fff"/>
        </View>
        <View style={ styles.iconBack }>
          <Icon name="instagram" size={25} color="#fff"/>
        </View>
        <View style={ styles.iconBack }>
          <Icon name="vk" size={25} color="#fff"/>
        </View>
      </View>

    </View>
  )
}
