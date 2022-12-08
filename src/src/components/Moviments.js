import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';


export function Moviments({ data, click }) {
  return (
    <TouchableOpacity style={styles.container} onPress={click}>
      <Text style={styles.service}>{data.tipoServico.descricao}</Text>
      <View style={styles.content}>
        <Text style={styles.date}>{moment(data.data).format('DD/MM/YYYY')}</Text>
        <Text style={data.status===0 ? styles.label : data.status===1 ? styles.orcado: data.status===2 ? styles.aprovado: styles.rejeitado}>{
        data.status===0 ? 'Pendente' : data.status===1 ? 'Orçado': data.status===2 ? 'Aprovado': 'Rejeitado'}</Text>
      </View>
      <View style={styles.datail}>
        <Text style={styles.label}>{data.obs}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA',
  },
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
