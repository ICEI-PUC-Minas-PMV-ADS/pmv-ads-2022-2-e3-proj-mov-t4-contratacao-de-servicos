import React, { useState, useEffect } from 'react';
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
import { CheckBox } from '../../components/CheckBox';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { listaTipoServico } from '../../services/tipoServico';

export default function RegistrarPasso04({ route }) {
  const navigation = useNavigation();
  const { dadosBasicoNovo } = route.params ? route.params : {};
  const [tipoServico, setTipoServico] = useState([]);
  const [servicosPrestados, setServicosPrestados] = useState([]);

  useEffect(() => {
    console.log('entrou');
    listaTipoServico().then((res) => {
      if (res) {
        if (res) {
          setTipoServico(res);
          console.log('preencheu2');
        } else {
          setTipoServico([]);
          console.log('nao achou');
        }
      } else {
        Alert.alert('Atenção', 'Erro na API! Tentye novamente mais tarde =D');
        setTipoServico([]);
        console.log('dsadsadas');
      }
    });
  }, []);
  

  const handleRegister = () => {
    const token = AsyncStorage.getItem('@TOKEN_KEY');
    if (token) {
      AsyncStorage.removeItem('@TOKEN_KEY').then();
    }
    if (servicosPrestados){
      Alert.alert(
          'Atenção',
          'Usuario não cadastrado! Tentye novamente mais tarde =D'
        );
    }

    let listaServico=[];
    for(i=0;i<servicosPrestados.length;i++){
      listaServico.push({id : servicosPrestados[i], descricao : ""})
    }

    register({
      ...dadosBasicoNovo,
      tipoServicos : listaServico
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

  return (
    <Container>
      <View style={styles.header}></View>
      <Headline style={styles.textHeader}>
        Qual(is) o(s) tipo(s) de serviço(s) voce executa
      </Headline>
      <Body>
        <CheckBox
          options={tipoServico}
          onChange={(op) => (setServicosPrestados(op))}
          multiple></CheckBox>
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
    marginTop: 8,
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
