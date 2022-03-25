import {View, Text, TextInput, TouchableOpacity, Modal} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import {AuthContext} from '../../context/auth';
import {postRate} from '../../service/api';

export default function ModalAvaluate({
  modalIsVisible,
  onRequestClose,
  type,
  idType,
}) {
  const [avaluate, setAvaluate] = useState(null);
  const {sessionId} = useContext(AuthContext);

  async function changeAvaluate() {
    await postRate(idType, sessionId, avaluate);
  }

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
                setAvaluate({
                  value: parseInt(value),
                });
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
          <TouchableOpacity
            style={styles.buttonOk}
            onPress={changeAvaluate() && onRequestClose}>
            <Text style={styles.buttonOk.text}>ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
