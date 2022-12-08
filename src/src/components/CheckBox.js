import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function CheckBox({ options = [], onChange, multiple = false }) {
  const [selected, setSelected] = useState([]);

  function toggle(id) {
    let index = selected.findIndex((i) => i === id);
    let arrSelecteds = [...selected];
    if (index !== -1) {
      arrSelecteds.splice(index, 1);
    } else {
      multiple ? arrSelecteds.push(id) : (arrSelecteds = [id]);
    }
    setSelected(arrSelecteds);
  }

  useEffect(() => onChange(selected), [selected]);
  return (
    <View style={styles.container}>
      {options.map((op, index) => (
        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={[
              styles.touchable,
              {
                backgroundColor:
                  selected.findIndex((i) => i === op?.id) !== -1
                    ? 'rgb(98, 0, 238)'
                    : '#fff',
              },
            ]}
            onPress={() => toggle(op?.id)}>
            {selected.findIndex((i) => i === op?.id) !== -1 ? (
              <Icon name="check-bold" color="#fff" size={20} />
            ) : null}
          </TouchableOpacity>
          <Text style={styles.opText}>{op?.descricao}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  touchable: {
    height: 22,
    width: 22,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(98, 0, 238)',
    borderWidth: 2,
  },
  opText: {
    marginLeft: 2,
    color: '#555',
    fontSize: 16,
    fontWeight: 600,
  },
});
