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
import { StyleSheet, View, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextInputMask } from 'react-native-masked-text';
import { validaUsername } from '../../services/auth.services';

const schema = yup.object({
  nome: yup.string().required('Informe o seu nome'),
  cpf: yup
    .string()
    .required('Informe o seu CPF')
    .test('test-invalid-cpf', 'CPF inválido', (cpf) => cpfField.isValid()),
  telefone: yup
    .string()
    .required('Informe o seu telefone')
    .test('test-invalid-telefone', 'Telefone inválido', (telefone) => {
      const brazilianPhoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;
      return brazilianPhoneRegex.test(telefone);
    }),
  username: yup
    .string()
    .email('Email inválido')
    .required('Informe o seu e-mail'),
  password: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 dígitos')
    .required('Informe a senha'),
});

let cpfField = null;

export default function RegistrarPasso02({ route }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation();
  const { tipoUsuario } = route.params ? route.params : {};
  const [emailExistente, setEmailExistente] = useState('');

  const handleProximo = (data) => {
    console.log(data)
    let dadosBasico = {
      ...tipoUsuario,
      nome: data.nome.trim(),
      cpf: data.cpf.trim().replace('-', '').replace('.', ''),
      telefone: data.telefone.trim().replace('-', '').replace('(', '').replace(')', ''),
      username: data.username.trim().toLowerCase(),
      password: data.password,
    };

    validaUsername({
      username: data.username,
    }).then((res) => {
      if (res) {
        console.log(res);
        if (res === 'OK') {
          console.log(dadosBasico);
          navigation.navigate('RegisterPasso03', { dadosBasico });
        } else {
          setEmailExistente('Email já cadastrado!!');
        }
      } else {
        console.log('false2');
        Alert.alert('Atenção', 'Erro na API! Tentye novamente mais tarde =D');
        console.log('error');
      }
    });
  };

  return (
    <Container>
      <View style={styles.header}></View>
      <Headline style={styles.textHeader}>Cadastro</Headline>
      <Body>
        <Controller
          control={control}
          name="nome"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Nome"
              left={<TextInput.Icon name="account" />}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.nome && (
          <Text style={styles.textError}>{errors.nome?.message}</Text>
        )}

        <Controller
          control={control}
          name="cpf"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="CPF"
              left={<TextInput.Icon name="passport" />}
              keyboardType="decimal-pad"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              render={(props) => (
                <TextInputMask
                  {...props}
                  type={'cpf'}
                  ref={(ref) => (cpfField = ref)}
                />
              )}
            />
          )}
        />
        {errors.cpf && (
          <Text style={styles.textError}>{errors.cpf?.message}</Text>
        )}

        <Controller
          control={control}
          name="telefone"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Telefone"
              left={<TextInput.Icon name="phone-classic" />}
              keyboardType="phone-pad"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              render={(props) => (
                <TextInputMask
                  {...props}
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                  }}
                />
              )}
            />
          )}
        />
        {errors.telefone && (
          <Text style={styles.textError}>{errors.telefone?.message}</Text>
        )}

        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="E-mail"
              left={<TextInput.Icon name="email" />}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.username && (
          <Text style={styles.textError}>{errors.username?.message}</Text>
        )}
        {emailExistente && (
          <Text style={styles.textError}>{emailExistente}</Text>
        )}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Senha"
              left={<TextInput.Icon name="key" />}
              secureTextEntry
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.textError}>{errors.password?.message}</Text>
        )}

        <Button
          mode="contained"
          style={styles.button}
          onPress={handleSubmit(handleProximo)}>
          Próximo
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
    marginTop: 50,
    marginBottom: 12,
  },
  textError: {
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#ff375b',
    marginBottom: 8,
  },
});
