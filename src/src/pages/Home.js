import * as React from 'react';
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

const Home = () => {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const { setSigned, setName } = useUser();
  const [routes] = React.useState([
    {
      key: 'gastos',
      title: 'Gastos',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {
      key: 'calculadora',
      title: 'Calculadora',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
  ]);

  const handleAlterarSenha = () => {
    navigation.navigate('AlterarSenha')
  };

  const handleSair = () => {
    setSigned(false);
    AsyncStorage.removeItem('@TOKEN_KEY').then();
  };

  return (
    <Container>
      <View style={styles.header}></View>
      <Headline style={styles.textHeader}>Tela Principal</Headline>
      <Body>
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleAlterarSenha}>
          Alterar Senha
        </Button>
        <Button mode="outlined" style={styles.button} onPress={handleSair}>
          Sair
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

export default Home;
