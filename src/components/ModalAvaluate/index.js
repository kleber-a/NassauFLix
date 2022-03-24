import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function ModalAvaluate() {
  return (
    <View style={styles.container}>
      <Text style={styles.textAvaluate}>Faça a sua avaliação!</Text>
      <View style={styles.inputGroup}>
        <View style={styles.inputContainer}>
          <Icon
            style={styles.inputIcon}
            name="pencil"
            size={17}
            color="#C4C4C4"
          />
          <TextInput
            keyboardType={'numeric'}
            style={styles.input}
            maxLength={3}
            // onChangeText={usernameInput => {
            //   setUsername(usernameInput);
            // }}
          />
        </View>
        <Text style={styles.inputText}> / 10</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonCancel}>
          <Text style={styles.buttonCancel.text}>cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOk}>
          <Text style={styles.buttonOk.text}>ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
