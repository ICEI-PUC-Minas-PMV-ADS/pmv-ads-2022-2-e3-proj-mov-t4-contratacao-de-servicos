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


export default function Home() {
  const navigation = useNavigation();

  const isFocused = useIsFocused();
  const { setSigned, setName } = useUser();
  const [ listaPedido, setListaPedido ] = useState([]);

  useEffect(() => {
    console.log('entrou');
    listaPedidoByCliente(62).then((res) => {
      if (res) {
        if (res) {
          setListaPedido(res);
          console.log(res);
          console.log('preencheu2');
        } else {
          setListaPedido([]);
          console.log('nao achou');
        }
      } else {
        Alert.alert('Atenção', 'Erro na API! Tentye novamente mais tarde =D');
        setListaPedido([]);
        console.log('dsadsadas');
      }
    });
  }, [isFocused]);
  
  

  const handleAlterarSenha = () => {
    navigation.navigate('AlterarSenha');
  };
  const handleNovo = () => {
    navigation.navigate('Pedido');
  };


  const handleSair = () => {
    setSigned(false);
    AsyncStorage.removeItem('@TOKEN_KEY').then();
  };

  return (
    <Container>
      <Header name="Home" click={handleAlterarSenha}/>
      <Body>
      <Text style={styles.title}>Pedidos Realizados</Text>
      <FlatList
        style={styles.list}
        data={listaPedido}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} click={()=> {navigation.navigate('Detalhe', {item})}}/>}
      />
      <TouchableOpacity onPress={handleNovo}>
      <View style={styles.areaButton}>
          <AntDesign name="plus" size={26} color="#000" />
        </View>
      </TouchableOpacity>
      
        
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  areaButton: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 12,
    fontWeight:'bold',
    margin:8,
  },
  list: {
    marginStart: 8,
    marginEnd: 8,
  },
});
