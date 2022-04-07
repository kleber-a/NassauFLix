import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, FlatList } from "react-native";
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'

export default function ModalFavoriteList() {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [buttonClickOn, setButtonClickOn] = useState(null)
    const changeFalseModals = function () {
        if (modalVisible && modalVisible2 === true) {
            setModalVisible(false);
            setModalVisible2(false);
        }
    };
    const data = [
        "felipe",
        "maicon",
        "luiza ",
        "kleber",
        "feliciano",
        "filmes que mudaram minha vida",
        "filmes que mudaram sua vida",
        "filmes que mudaram nossa vida",
    ]
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.containerRenderItem}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setButtonClickOn(index)}
                    style={styles.buttonClick}
                >
                    <View style={buttonClickOn === index && styles.buttonClickOn} />
                </TouchableOpacity>
                <Text style={styles.TextFlatList}>{item}</Text>
            </View>
        )
    };
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible2}
            >
                <View style={styles.modal2background}>
                    <View style={styles.modal2}>
                        <Icon name='checkcircleo' size={25} color='#000000' />
                        <Text style={styles.textModal2}>Lista atualizada com sucesso!</Text>
                        <TouchableOpacity
                            style={styles.buttonModal2}
                            onPress={() => changeFalseModals()}
                        >
                            <Text style={styles.textStyleSave}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.headerHender}>
                            <Text style={styles.textHeader}>Salvar filme em....</Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Icon style={styles.iconClose} name='close' solid />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line} />
                        <FlatList
                            data={data}
                            keyExtractor={(item, index) => index}
                            renderItem={renderItem}
                            contentContainerStyle={styles.containerFlatList}

                        />
                        <TouchableOpacity
                            style={styles.buttonSave}
                            onPress={() => setModalVisible2(!modalVisible2)}
                            
                        >
                            <Text style={styles.textStyleSave}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </Modal>
            <TouchableOpacity 
                style={styles.containerOpenModal}
                onPress={() => setModalVisible(true)}
            >
                <Icon style={styles.iconOpenModal} name='plus' size={25} />
                <Text style={styles.textOpenModal}>Adicionar a uma lista</Text>
            </TouchableOpacity>
        </View >
    );
};
