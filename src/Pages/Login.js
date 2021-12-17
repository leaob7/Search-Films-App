import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View>
      <View>
        <Text>Welcome</Text>
        <Text>Log in to the cinema</Text>
      </View>

      <View>
        <TextInput placeholder="E-mail" />
        <TextInput placeholder="Password" />
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>OR using</Text>
        <Text>Icon 1</Text>
        <Text>Icon 2</Text>
        <Text>Icon 3</Text>
      </View>

    </View>
  )
}