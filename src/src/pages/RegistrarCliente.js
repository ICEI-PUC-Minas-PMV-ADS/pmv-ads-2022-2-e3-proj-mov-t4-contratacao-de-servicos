import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Body } from '../components/Body';
import { Logo } from '../components/Logo';
import { TextInput, Button, Headline, RadioButton } from 'react-native-paper';
import { Input } from '../components/Input';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegistrarCliente() {
  const navigation = useNavigation();
  const [tipo, setTipo] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleProximo = () => {
    let dadosBasico = {
      username: email.trim().toLowerCase(),
      password: password,
      role: tipo,
      nome: name.trim(),
      cpf: cpf.trim(),
      telefone: telefone.trim(),
    };
    navigation.navigate('Endereco', { dadosBasico });
  };

  return (
    <Container>
      <View style={styles.header}></View>
      <Headline style={styles.textHeader}>Cadastro</Headline>
      <Body>
        <View style={styles.containerRadio}>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'cliente' ? 'checked' : 'unchecked'}
              color={'red'}
              onPress={() => setTipo('cliente')}
            />
            <Text>Cliente</Text>
          </View>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="second"
              status={tipo === 'fornecedor' ? 'checked' : 'unchecked'}
              color={'green'}
              onPress={() => setTipo('fornecedor')}
            />
            <Text>Fornecedor</Text>
          </View>
        </View>
        <Input
          label="Nome"
          value={name}
          left={<TextInput.Icon name="account" />}
          onChangeText={(text) => setName(text)}
        />
        <Input
          label="CPF"
          value={cpf}
          left={<TextInput.Icon name="passport" />}
          onChangeText={(text) => setCpf(text)}
          keyboardType="decimal-pad"
        />
        <Input
          label="E-mail"
          value={email}
          left={<TextInput.Icon name="email" />}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Senha"
          value={password}
          left={<TextInput.Icon name="key" />}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          label="Telefone"
          value={telefone}
          left={<TextInput.Icon name="phone-classic" />}
          onChangeText={(text) => setTelefone(text)}
          keyboardType="decimal-pad"
        />
        <Button mode="contained" style={styles.button} onPress={handleProximo}>
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
    marginTop: 30,
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
});
