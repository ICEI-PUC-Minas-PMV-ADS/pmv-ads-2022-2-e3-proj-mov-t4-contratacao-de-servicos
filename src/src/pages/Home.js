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
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  
  return (
    <Container>
      <Image style={styles.logo} source={require('../assets/bh_logo.png')} />
      <Input label="Digite seu email" />
      <Input label="Digite sua senha" secureTextEntry />
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          Alert.alert('BH Serciços', ' Logando....');
        }}>
        <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.containerRadio}>
        <View style={styles.containerRadioItem}>
          <TouchableOpacity
            onPress={()=> {
              navigation.navigate('TipoCadastro');}}>
            <Text style={styles.text}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
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
  text: {
    color: '#2c346b',
    fontSize: 16,
  },
});

export default Home;
