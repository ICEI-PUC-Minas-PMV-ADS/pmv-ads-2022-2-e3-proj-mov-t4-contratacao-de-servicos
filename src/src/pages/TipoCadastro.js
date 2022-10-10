import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  View,
} from 'react-native';
import { Header } from '../components/Header';
import { Container } from '../components/Container';
import { Body } from '../components/Body';
import { useNavigation } from '@react-navigation/native';

const TipoCadastro = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header title="Tipo de Cadastro" goBack={() => navigation.goBack()}>
      </Header>
      <Body>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          Alert.alert('BH Serciços', ' Cliente....');
        }}>
        <Text style={styles.botaoText}>Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          Alert.alert('BH Serciços', ' Fornecedor....');
        }}>
        <Text style={styles.botaoText}>Fornecedor</Text>
      </TouchableOpacity>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  botao: {
    width: 300,
    height: 45,
    backgroundColor: '#2c346b',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default TipoCadastro;
