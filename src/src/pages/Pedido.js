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
import { CheckBox } from '../components/CheckBox';

import { AntDesign } from '@expo/vector-icons';

import { salvar } from '../services/pedido';
import { listaTipoServico } from '../services/tipoServico';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object({
  obs: yup.string().required('Informe o detalhe do serviço'),
});

export default function Pedido() {
  const navigation = useNavigation();
    const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const isFocused = useIsFocused();
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


    const handleSalvar = (data) => {
    console.log('Salvar')
    let cliente = {
      id: 62
    };
    let tipo = {
      id: 62
    }
    salvar({
      cliente : cliente,
      obs: data.obs,
      tipoServico : tipo
    }).then((res) => {
      if (res) {
        console.log('passou');
        Alert.alert('Atenção', 'Usuario cadastrado com sucesso', [
          { text: 'OK', onPress: () => navigation.navigate('Login') },
        ]);
        console.log('passou');
      } else {
        console.log('error');
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
      <Header name="Novo Pedido" />
      <Body>
        <CheckBox
          options={tipoServico}
          onChange={(op) => setServicosPrestados(op)}
        />
        <Controller
          control={control}
          name="obs"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Detalhes do Serviço"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.obs && (
          <Text style={styles.textError}>{errors.obs?.message}</Text>
        )}
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleSubmit(handleSalvar)}>
          Salvar
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
  textError: {
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#ff375b',
    marginBottom: 8,
  },
});
