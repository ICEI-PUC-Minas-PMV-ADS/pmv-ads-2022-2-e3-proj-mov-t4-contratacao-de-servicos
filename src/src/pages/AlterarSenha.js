import React,  { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { Container } from '../components/Container';
import { Body } from '../components/Body';
import { Logo } from '../components/Logo';
import { TextInput, Button, Headline, RadioButton } from 'react-native-paper';
import { Input } from '../components/Input';
import { StyleSheet, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../contexts/UserContext';
import jwt_decode from "jwt-decode";
import { alterarSenha } from '../services/auth.services';


const AlterarSenha = () => {
  const navigation = useNavigation();

  const [passwordOld, setPasswordOld] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [passwordReNew, setPasswordReNew] = useState('');


  const handleAlterarSenha = async() => {

    if (!(passwordOld)) {
      Alert.alert('Atenção', 'Digite sua senha antiga! ');
      return;
    }

    if (!(passwordNew)) {
      Alert.alert('Atenção', 'Digite uma nova senha! ');
      return;
    }
    
    if (!(passwordNew === passwordReNew)) {
      Alert.alert('Atenção', 'Senha digitado nao confere! ');
      return;
    }

    const token = await AsyncStorage.getItem('@TOKEN_KEY');
    const dados = jwt_decode(token);
    alterarSenha({
      username: dados.user_name,
      oldPassword: passwordOld,
      newPassword: passwordNew,
    }).then((res) => {
      if (res) {
        Alert.alert('Atenção', res, [
          { text: 'OK', onPress: () => navigation.goBack() },
        ]);
      } else {
        Alert.alert(
          'Atenção',
          'Usuario não cadastrado! Tentye novamente mais tarde =D'
        );
      }
    });
  };

  return (
    <Container>
      <View style={styles.header}></View>
      <Headline style={styles.textHeader}>Alterar Senha</Headline>
      <Body>
      <Input
          label="Senha Antiga"
          value={passwordOld}
          left={<TextInput.Icon name="key" />}
          secureTextEntry
          onChangeText={(text) => setPasswordOld(text)}
        />
        <Input
          label="Nova Senha"
          value={passwordNew}
          left={<TextInput.Icon name="key" />}
          secureTextEntry
          onChangeText={(text) => setPasswordNew(text)}
        />
        <Input
          label="Repetir Senha"
          value={passwordReNew}
          left={<TextInput.Icon name="key" />}
          secureTextEntry
          onChangeText={(text) => setPasswordReNew(text)}
        />
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleAlterarSenha}>
          Alterar Senha
        </Button>
        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </Body>
    </Container>
  );
};

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

export default AlterarSenha;
