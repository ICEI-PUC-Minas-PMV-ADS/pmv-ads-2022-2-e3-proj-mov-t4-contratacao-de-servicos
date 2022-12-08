import React, { useState } from 'react';
import { Container } from '../../components/Container';
import { Body } from '../../components/Body';
import { Logo } from '../../components/Logo';
import { TextInput, Button, Headline } from 'react-native-paper';
import { Input } from '../../components/Input';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { register } from '../../services/auth.services';
//import {TextInputMask} from 'react-native-text-input-mask';
import { buscaCep } from '../../services/viacep';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextInputMask } from 'react-native-masked-text';

import AsyncStorage from '@react-native-async-storage/async-storage';

const schema = yup.object({
  cep: yup.string().required('Informe o seu CEP'),
  logradouro: yup.string().required('Informe o logradouro'),
  numero: yup.string().required('Informe o número'),
  complemento: yup.string(),
  bairro: yup.string().required('Informe o bairro'),
  cidade: yup.string().required('Informe a cidade'),
  uf: yup.string().required('Informe a uf'),
});

export default function RegistrarPasso03({ route }) {
  const navigation = useNavigation();
  const { dadosBasico } = route.params ? route.params : {};

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (data) => {
    let dadosBasicoNovo = {
      ...dadosBasico,
      ...data,
    };

    const token = AsyncStorage.getItem('@TOKEN_KEY');
    if (token) {
      AsyncStorage.removeItem('@TOKEN_KEY').then();
    }
    register(dadosBasicoNovo).then((res) => {
      if (res) {
        Alert.alert('Atenção', 'Usuario cadastrado com sucesso', [
          { text: 'OK', onPress: () => navigation.navigate('Login') },
        ]);
        console.log('passou');
      } else {
        Alert.alert(
          'Atenção',
          'Usuario não cadastrado! Tentye novamente mais tarde =D'
        );
        console.log('error');
      }
    });
  };

  const handleProximo = (data) => {
    let dadosBasicoNovo = {
      ...dadosBasico,
      ...data,
    };
    console.log(dadosBasicoNovo)
    navigation.navigate('RegisterPasso04', { dadosBasicoNovo });
  };

  const handleBuscarCep = () => {
    let cep = getValues('cep');
    if (cep) {
      cep = cep.replace('-', '');
      if (cep.length == 8) {
        console.log(cep);
        buscaCep(cep).then((res) => {
          if (res) {
            setValue('logradouro', res.logradouro);
            setValue('bairro', res.bairro);
            setValue('uf', res.uf);
            setValue('cidade', res.localidade);
          }
        });
      }
    }
  };

  return (
    <Container>
      <View style={styles.header}></View>
      <Headline style={styles.textHeader}>Endereço</Headline>
      <Body>
        <Controller
          control={control}
          name="cep"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="CEP"
              left={<TextInput.Icon name="map-marker" />}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
              onBlur={handleBuscarCep}
              render={(props) => <TextInputMask {...props} type={'zip-code'} />}
            />
          )}
        />
        {errors.cep && (
          <Text style={styles.textError}>{errors.cep?.message}</Text>
        )}

        <Controller
          control={control}
          name="logradouro"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Logradouro"
              left={<TextInput.Icon name="road" />}
              value={value}
              onChangeText={onChange}
              onBlur={handleBuscarCep}
            />
          )}
        />
        {errors.logradouro && (
          <Text style={styles.textError}>{errors.logradouro?.message}</Text>
        )}

        <Controller
          control={control}
          name="numero"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Número"
              left={<TextInput.Icon name="passport" />}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="decimal-pad"
            />
          )}
        />
        {errors.numero && (
          <Text style={styles.textError}>{errors.numero?.message}</Text>
        )}

        <Controller
          control={control}
          name="complemento"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Complemento"
              left={<TextInput.Icon name="office-building-marker" />}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.complemento && (
          <Text style={styles.textError}>{errors.complemento?.message}</Text>
        )}

        <Controller
          control={control}
          name="bairro"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Bairro"
              left={<TextInput.Icon name="mailbox-outline" />}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.bairro && (
          <Text style={styles.textError}>{errors.bairro?.message}</Text>
        )}

        <Controller
          control={control}
          name="cidade"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Cidade"
              left={<TextInput.Icon name="city" />}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.cidade && (
          <Text style={styles.textError}>{errors.cidade?.message}</Text>
        )}

        <Controller
          control={control}
          name="uf"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="UF"
              left={<TextInput.Icon name="map-legend" />}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.uf && (
          <Text style={styles.textError}>{errors.uf?.message}</Text>
        )}
        {console.log(dadosBasico?.role)}
        {dadosBasico?.role === 'cliente' && (
          <Button
            mode="contained"
            style={styles.button}
            onPress={handleSubmit(handleRegister)}>
            Registrar
          </Button>
        )}
        {dadosBasico?.role === 'fornecedor' && (
          <Button
            mode="contained"
            style={styles.button}
            onPress={handleSubmit(handleProximo)}>
            Próximo
          </Button>
        )}
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
  textError: {
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#ff375b',
    marginBottom: 8,
  },
});
