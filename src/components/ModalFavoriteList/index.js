import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, FlatList } from "react-native";
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
export default function ModalFavoriteList() {

    const [modalVisible, setModalVisible] = useState(false);
    const [buttonClickOn, setButtonClickOn] = useState(null)

    const data = [
        "filmes que mudaram minha vida",
        "filmes que mudaram sua vida",
        "filmes que mudaram nossa vida",
        4,
        5,
        6,
        7,
        8]


    // function alertSaved() {
    //     try {
    //         const stateMovie = await getState(type, id, sessionId);
    //         setMovieRated(stateMovie.rated.value);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }








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
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.headerHender}>
                            <Text style={styles.textHeader}>Salvar filme em....</Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Icon style={styles.iconClose} name='close' size={20} color='black' />
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
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyleSave}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </Modal >

            <TouchableOpacity
                style={[styles.containerPressable]}
                onPress={() => setModalVisible(true)}
            >
                <Icon style={styles.icon} name='pluscircleo' size={25} color='black' />
                <Text style={[styles.textStyle, styles.button, styles.buttonOpen]}>Adicionar a uma lista</Text>
            </TouchableOpacity>

        </View >
    );
};
