import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Body } from '../components/Body';
import { Logo } from '../components/Logo';
import { TextInput, Button, Headline } from 'react-native-paper';
import { Input } from '../components/Input';
import { StyleSheet, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { register } from '../services/auth.services';
//import {TextInputMask} from 'react-native-text-input-mask';
import { TextInputMask } from 'react-native-masked-text';
import { buscaCep } from '../services/viacep';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Endereco({ route }) {
  const navigation = useNavigation();
  const { dadosBasico } = route.params ? route.params : {};
  const [logradouro, setLogradouro] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const maskPhone = '([000]) [00000]-[0000]';
  const maskCep = '[00000]-[000]';

  const handleRegister = () => {
    const token = AsyncStorage.getItem('@TOKEN_KEY')
    if (token) {
      AsyncStorage.removeItem('@TOKEN_KEY').then();
    }

    register({
      ...dadosBasico,
      cep: cep.trim(),
      logradouro: logradouro.trim(),
      bairro: bairro.trim(),
      numero: numero.trim(),
      complemento: complemento.trim(),
      cidade: cidade.trim(),
      uf: uf.trim(),
      id: '',
    }).then((res) => {
      if (res) {
        Alert.alert('Atenção', 'Usuario cadastrado com sucesso', [
          { text: 'OK', onPress: () => navigation.navigate('Login') },
        ]);
      } else {
        Alert.alert(
          'Atenção',
          'Usuario não cadastrado! Tentye novamente mais tarde =D'
        );
      }
    });
  };

  const handleBuscarCep = () => {
    if (cep.length == 8) {
      buscaCep(cep).then((res) => {
        if (res) {
          setLogradouro(res.logradouro);
          setBairro(res.bairro);
          setUf(res.uf);
          setCidade(res.localidade);
        }
      });
    }
  };

  return (
    <Container>
      <View style={styles.header}></View>
      <Headline style={styles.textHeader}>Endereço</Headline>
      <Body>
        <Input
          label="CEP"
          value={cep}
          left={<TextInput.Icon name="map-marker" />}
          onChangeText={(text) => setCep(text)}
          keyboardType="numeric"
          onBlur={handleBuscarCep}
        />
        <Input
          label="Logradouro"
          value={logradouro}
          left={<TextInput.Icon name="road" />}
          onChangeText={(text) => setLogradouro(text)}
        />
        <Input
          label="Número"
          value={numero}
          left={<TextInput.Icon name="passport" />}
          onChangeText={(text) => setNumero(text)}
          keyboardType="decimal-pad"
        />
        <Input
          label="Complemento"
          value={complemento}
          left={<TextInput.Icon name="office-building-marker" />}
          onChangeText={(text) => setComplemento(text)}
        />
        <Input
          label="Bairro"
          value={bairro}
          left={<TextInput.Icon name="mailbox-outline" />}
          onChangeText={(text) => setBairro(text)}
        />
        <Input
          label="Cidade"
          value={cidade}
          left={<TextInput.Icon name="city" />}
          onChangeText={(text) => setCidade(text)}
        />
        <Input
          label="UF"
          value={uf}
          left={<TextInput.Icon name="map-legend" />}
          onChangeText={(text) => setUf(text)}
        />
        <Button mode="contained" style={styles.button} onPress={handleRegister}>
          Registar
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
  maskedInput: {
    borderWidth: 2,
    borderRadius: 6,
    width: '80%',
    padding: 12,
    color: 'black',
    fontSize: 20,
  },
});
