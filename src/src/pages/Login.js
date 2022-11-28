import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Body } from '../components/Body';
import { Logo } from '../components/Logo';
import { RadioButton, TextInput, Button, Headline } from 'react-native-paper';
import { Input } from '../components/Input';
import { StyleSheet, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';
import { login } from '../services/auth.services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

import { listaTipoServico } from '../services/tipoServico';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const { setSigned, setName } = useUser();

  const handleLogin = () => {
    AsyncStorage.removeItem('@TOKEN_KEY').then();
    login({
      username: email.trim().toLowerCase(),
      password: password,
      grant_type: 'password',
    }).then((res) => {
      if (res && res.access_token) {
        setSigned(true);
        //setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res.access_token).then();
      } else {
        Alert.alert('Atenção', 'Usuario ou senha inválidos! ');
      }
    });
  };

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>
      <Headline style={styles.textHeader}>BH SERVICOS</Headline>
      <Body>
        <Input
          label="E-mail"
          value={email}
          left={<TextInput.Icon name="account" />}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Senha"
          value={password}
          left={<TextInput.Icon name="key" />}
          right={
            showPassword ? (
              <TextInput.Icon
                name="eye"
                onPress={() => setShowPassword(!showPassword)}
              />
            ) : (
              <TextInput.Icon
                name="eye-off"
                onPress={() => setShowPassword(!showPassword)}
              />
            )
          }
          secureTextEntry={showPassword}
          onChangeText={(text) => setPassword(text)}
        />
        <Button mode="contained" style={styles.button} onPress={handleLogin}>
          Login
        </Button>
        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate('RegisterPasso01')}>
          Registrar
        </Button>
        
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
  },
  textHeader: {
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 12,
  },
});
