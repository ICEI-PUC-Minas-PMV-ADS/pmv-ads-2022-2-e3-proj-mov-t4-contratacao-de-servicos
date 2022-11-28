import React, { useState } from 'react';
import { Container } from '../../components/Container';
import { Body } from '../../components/Body';
import { Logo } from '../../components/Logo';
import { TextInput, Button, Headline } from 'react-native-paper';
import { Input } from '../../components/Input';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { register } from '../../services/auth.services';
//import {TextInputMask} from 'react-native-text-input-mask';
import { buscaCep } from '../../services/viacep';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextInputMask } from 'react-native-masked-text';
import CheckboxList from 'rn-checkbox-list';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegistrarPasso04({ route }) {
  const navigation = useNavigation();
  const { dadosBasico } = route.params ? route.params : {};
  const [tipoServico, setTipoServico] = useState([
    { id: 1, name: 'Green Book' },
    { id: 2, name: 'Bohemian Rhapsody' },
  ]);

  const handleRegister = (data) => {
    const token = AsyncStorage.getItem('@TOKEN_KEY');
    if (token) {
      AsyncStorage.removeItem('@TOKEN_KEY').then();
    }
    register({
      ...dadosBasico,
      ...data,
    }).then((res) => {
      if (res) {
        Alert.alert('Atenção', 'Usuario cadastrado com sucesso', [
          { text: 'OK', onPress: () => navigation.navigate('Login') },
        ]);
        console.log('passou');
      } else {
        Alert.alert(
          'Atenção',
          'Usuario não cadastrado! Tentye novamente mais tarde =D'
        );
        console.log('error');
      }
    });
  };

  const handleBuscarCep = () => {};

  return (
    <Container>
      <View style={styles.header}></View>
      <Headline style={styles.textHeader}>Endereço</Headline>
      <Body>
        <Button mode="contained" style={styles.button} onPress={handleRegister}>
          Registrar
        </Button>
        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.goBack()}>
          Voltar
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
    marginTop: 30,
    marginBottom: 12,
  },
});
