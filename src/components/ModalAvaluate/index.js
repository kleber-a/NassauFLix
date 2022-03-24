import {View, Text, TextInput, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function ModalAvaluate({modalIsVisible, onRequestClose}) {
  const [avaluate, setAvaluate] = useState(null);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalIsVisible}
      onRequestClose={onRequestClose}>
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
              onChangeText={value => {
                setAvaluate(value);
              }}
            />
          </View>
          <Text style={styles.inputText}> / 10</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={onRequestClose}>
            <Text style={styles.buttonCancel.text}>cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOk}>
            <Text style={styles.buttonOk.text}>ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
