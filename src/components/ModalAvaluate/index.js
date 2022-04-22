import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import {AuthContext} from '../../context/auth';
import {postRate} from '../../service/api';

export default function ModalAvaluate({
  modalIsVisible,
  setModalVisible,
  typeId,
  type,
  awaitAvaluates,
  setIsRated,
}) {
  const [avaluate, setAvaluate] = useState(null);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [errorNumberAfter, setErrorNumberAfter] = useState(false);
  const {sessionId} = useContext(AuthContext);

  useEffect(() => {
    setAvaluate(null);
    setDisabled(true);
    setError(false);
    setErrorNumberAfter(false);
  }, [modalIsVisible]);

  function handleError(value) {
    const regexModal = new RegExp(
      /^(?:[1-9]|0[1-9]|10)$|^[1-9]?\.[0-9]|^[0-9]?\.[1-9]|^[0-9]\./,
    );

    const regexModalNumberAfter = new RegExp(
      /^(?:[1-9]|0[1-9]|10)$|^[1-9]?\.[0|5]|^[0-9]?\.[5]/,
    );

    setError(!regexModal.test(value));

    if (!regexModal.test(value)) {
      setErrorNumberAfter(false);
    } else {
      setErrorNumberAfter(!regexModalNumberAfter.test(value));
    }
    return !regexModal.test(value);
  }

  async function changeAvaluate() {
    await postRate(type, typeId, sessionId, {
      value: avaluate,
    });
    setIsRated(true);
    await awaitAvaluates();
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalIsVisible}
      onRequestClose={() => {
        setModalVisible(!modalIsVisible);
      }}>
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={() => {
          setModalVisible(!modalIsVisible);
        }}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={styles.containerModal}>
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
                    onFocus={value => {
                      setDisabled(false);
                      handleError(avaluate);
                    }}
                    onChangeText={value => {
                      setAvaluate(value);
                      handleError(value);
                    }}
                  />
                </View>
                <Text style={styles.inputText}> / 10</Text>
              </View>
              {error && (
                <Text style={styles.textErrorModal}>
                  A nota deve ser entre 0.5 a 10
                </Text>
              )}
              {errorNumberAfter && (
                <Text style={styles.textErrorModal}>
                  O número decimal deve ser 0 ou 5
                </Text>
              )}
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.buttonCancel}
                  onPress={() => {
                    setModalVisible(!modalIsVisible);
                  }}>
                  <Text style={styles.buttonCancel.text}>cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={error || errorNumberAfter || disabled}
                  style={
                    error || errorNumberAfter || disabled
                      ? styles.buttonOkDisabled
                      : styles.buttonOk
                  }
                  onPress={() => {
                    error || errorNumberAfter || disabled
                      ? null
                      : changeAvaluate() && setModalVisible(!modalIsVisible);
                  }}>
                  <Text
                    style={
                      error || errorNumberAfter || disabled
                        ? styles.buttonOkDisabled.text
                        : styles.buttonOk.text
                    }>
                    ok
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
