import React, { useState, useEffect, useCallback } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { Container } from '../components/Container';
import { Body } from '../components/Body';
import { Logo } from '../components/Logo';
import { TextInput, Button, Headline, RadioButton } from 'react-native-paper';
import { Input } from '../components/Input';
import { StyleSheet, View, Alert, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../contexts/UserContext';

import { Header } from '../components/Header';
import { Moviments } from '../components/Moviments';
import { Actions } from '../components/Actions';

import { AntDesign } from '@expo/vector-icons';

import { listaPedidoByCliente } from '../services/pedido';


export default function PedidoDatails({ route }) {
  const navigation = useNavigation();

  const isFocused = useIsFocused();
  const { setSigned, setName } = useUser();
  const [ listaPedido, setListaPedido ] = useState([]);

  useEffect(() => {
    
  }, [isFocused]);
  
  






  return (
    <Container>
      <Header  />
      <Body>
      <Text style={styles.title}>Pedidos Realizados</Text>
      <Text style={styles.date}>yyyyy</Text>
        
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({

});
