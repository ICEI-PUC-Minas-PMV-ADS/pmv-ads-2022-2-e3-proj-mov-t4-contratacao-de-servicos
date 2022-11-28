import React, { useState } from 'react';
import { Container } from '../../components/Container';
import { Body } from '../../components/Body';
import { Logo } from '../../components/Logo';
import {
  TextInput,
  Button,
  Headline,
  RadioButton,
  HelperText,
} from 'react-native-paper';
import { Input } from '../../components/Input';
import { StyleSheet, View, Alert, Text, Hr } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegistrarPasso01() {
  const navigation = useNavigation();
  const [tipo, setTipo] = useState('');
  const [showError,setShowError] = useState('');

  const handleProximo = () => {
    if(!tipo) {
      setShowError(true);
      return
    }
    let tipoUsuario = {
      role: tipo,
    };
    navigation.navigate('RegisterPasso02', { tipoUsuario });
  };

  return (
    <Container>
      <View style={styles.header}></View>
      <Headline style={styles.textHeader}>Eu sou ...</Headline>
      <Body style={styles.body}>
        <View style={styles.containerRadio}>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'cliente' ? 'checked' : 'unchecked'}
              color={'red'}
              onPress={() => {
                setTipo('cliente');
                setShowError(false);
              }}
            />
            <Text style={styles.text}>Cliente</Text>
          </View>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="second"
              status={tipo === 'fornecedor' ? 'checked' : 'unchecked'}
              color={'green'}
              onPress={() => {
                setTipo('fornecedor');
                setShowError(false);
              }}
            />
            <Text style={styles.text}>Fornecedor</Text>
          </View>
        </View>

        <View style={styles.containerError}>
          {showError && 
            <Text style={styles.textError}>Tipo inválido</Text>
          }
        </View>

        <Button mode="contained" style={styles.button} onPress={handleProximo}>
          Próximo
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
  body: {
    justifyContent: 'center',
  },
  button: {
    marginBottom: 8,
  },
  textHeader: {
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 12,
  },
  containerRadio: {
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerRadioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerError: {
    flexDirection: 'column',
    marginTop: -10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 16,
  },
  textError: {
    fontSize: 12,
    color: '#FF0000',
  },
});
