import React, { useState } from "react";
import { Modal, Text, Pressable, View, FlatList } from "react-native";
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
export default function ModalFavoriteList() {

    const [modalVisible, setModalVisible] = useState(false);
    const [buttonClickOn, setButtonClickOn] = useState(false)
    const data = [1, 2, 3, 4, 5, 6, 7, 8]


    const renderItem = ({ item }) => {
        return (
            <View style={styles.containerRenderItem}>
                <Pressable
                    onPress={() => setButtonClickOn(!buttonClickOn)}
                >
                    <Text
                        style={buttonClickOn ? styles.buttonClickOn : styles.buttonClickOff}  > </Text>
                </Pressable>
                <Text style={styles.TextFlatList}>NOME DAS LISTAS TESTANDO</Text>
            </View>
        )
    };


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
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
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Icon style={styles.iconClose} name='close' size={20} color='black' />
                            </Pressable>
                        </View>

                        <View style={styles.line} />


                        <FlatList
                            data={data}
                            keyExtractor={(item, index) => index}
                            renderItem={renderItem}
                            contentContainerStyle={styles.containerFlatList}

                        />
                        <Pressable
                            style={styles.buttonSave}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyleSave}>Salvar</Text>
                        </Pressable>
                    </View>
                </View >
            </Modal >



            <Pressable
                style={[styles.containerPressable]}
                onPress={() => setModalVisible(true)}
            >
                <Icon style={styles.icon} name='pluscircleo' size={25} color='black' />
                <Text style={[styles.textStyle, styles.button, styles.buttonOpen]}>Adicionar a uma lista</Text>
            </Pressable>

        </View >
    );
};
