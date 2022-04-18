import React, { useContext } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AuthContext } from '../../context/auth';
export default function ModalLogout({ setModalVisibleSucess, modalVisibleSucess }) {
    const { logout } = useContext(AuthContext);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisibleSucess}
            onRequestClose={() => {
                setModalVisibleSucess(!modalVisibleSucess);
            }}>
            <View style={styles.modalSucessBackground}>
                <View style={styles.modalSucess}>
                    <Text style={styles.textModalAtention}> Atenção!</Text>
                    <Text style={styles.textModalSucess}>
                        Deseja mesmo sair?</Text>
                    <View style={styles.modalBox}>
                        <TouchableOpacity
                            onPress={() => setModalVisibleSucess(!modalVisibleSucess)}
                            style={styles.buttonModalNo}>
                            <Text style={styles.textStyleNo}>Não</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonModalYes}
                            onPress={() => {
                                [logout(), setModalVisibleSucess(!modalVisibleSucess)]
                            }
                            }>
                            <Text style={styles.textStyleYes}>Sim</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal >
    )
}