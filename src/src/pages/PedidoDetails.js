import React, { useState, useEffect, useCallback } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { Container } from '../components/Container';
import { Body } from '../components/Body';
import { Logo } from '../components/Logo';
import { TextInput, Button, Headline, RadioButton } from 'react-native-paper';
import { Input } from '../components/Input';
import {
  StyleSheet,
  View,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../contexts/UserContext';

import { Header } from '../components/Header';
import { Moviments } from '../components/Moviments';
import { Actions } from '../components/Actions';

import { AntDesign } from '@expo/vector-icons';

import { listaPedidoByCliente } from '../services/pedido';
import moment from 'moment';

export default function PedidoDetails({ route }) {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const isFocused = useIsFocused();

  const [id, setId] = useState('');
  const [cliente, setCliente] = useState('');
  const [tipoServico, setTipoServico] = useState('');
  const [data, setData] = useState('');
  const [obs, setObs] = useState('');
  const [status, setStatus] = useState('');
  const [descStatus, setDescStatus] = useState('');

  useEffect(() => {
    setId(item.id);
    setCliente(item.cliente);
    setTipoServico(item.tipoServico);
    setData(moment(item.data).format('DD/MM/YYYY'));
    setObs(item.obs);
    setStatus(item.status);
    setDescStatus(item.status===0 ? 'Pendente' : item.status===1 ? 'Orçado': item.status===2 ? 'Aprovado': 'Rejeitado')
  }, [isFocused]);

  return (
    <Container>
      <Body>
        <Text style={styles.service}>{tipoServico.descricao}</Text>
      <View style={styles.content}>
        <Text style={styles.date}>{data}</Text>
        <Text style={status===0 ? styles.label : status===1 ? styles.orcado: status===2 ? styles.aprovado: styles.rejeitado}>{descStatus}</Text>
      </View>
      <View style={styles.datail}>
        <Text style={styles.label}>{obs}</Text>
      </View>
      </Body>
    </Container>
  );
}


const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8,
  },
  service: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  date: {
    color: '#DADADA',
    fontWeight: 'bold',
    fontSize: 12
  },
  label: {
    fontSize: 16,
  },
  orcado: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0047AB',
  },
  aprovado: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2ecc71',
  },
  rejeitado: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#e74c3c',
  },
});
