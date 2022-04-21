import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

export default function ModalDeleteMovie({
  setModalVisibleSucess,
  modalVisibleSucess,
  SetMovieId,
  itemId
}) {
 

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisibleSucess}
      onRequestClose={() => {
        setModalVisibleSucess(!modalVisibleSucess);
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisibleSucess(!modalVisibleSucess);
        }}>
        <View style={styles.modalSucessBackground}>
          <TouchableWithoutFeedback>
            <View style={styles.modalSucess}>
              <Text style={styles.textModalAtention}> Atenção!</Text>
              <Text style={styles.textModalSucess}>
                Deseja mesmo remover o filme ?
              </Text>
              <View style={styles.modalBox}>
                <TouchableOpacity
                  onPress={() => setModalVisibleSucess(!modalVisibleSucess)}
                  style={styles.buttonModalNo}>
                  <Text style={styles.textStyleNo}>Não</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonModalYes}
                  onPress={() => {
                    SetMovieId({media_id: itemId});
                    setModalVisibleSucess(!modalVisibleSucess);
                  }}>
                  <Text style={styles.textStyleYes}>Sim</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
