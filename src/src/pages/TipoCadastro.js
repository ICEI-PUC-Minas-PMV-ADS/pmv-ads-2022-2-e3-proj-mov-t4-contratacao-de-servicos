import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  View,
} from 'react-native';
import { Input } from './../components/Input';

import { Container } from '../components/Container';

const TipoCadastro = () => {
  return (
    <Container>
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
