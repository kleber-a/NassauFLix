import React, {useState, useEffect, useContext} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  FlatList,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {getList, postMovieFavoriteList} from '../../service/api';
import {AuthContext} from '../../context/auth';

export default function ModalFavoriteList({navigation, movieId}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSucess, setModalVisibleSucess] = useState(false);
  const [buttonClickOn, setButtonClickOn] = useState(null);
  const {account, sessionId} = useContext(AuthContext);
  const [dataList, setDataList] = useState(null);
  const [listId, setListId] = useState(null);

  async function awaitGetList() {
    const list = await getList(account.id, sessionId, '1');
    setDataList(list.results);
  }

  useEffect(() => {
    awaitGetList();
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      awaitGetList();
    });
    return () => {
      setDataList(null);
    };
  }, [navigation]);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.containerRenderItem}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setButtonClickOn(index);
            setListId(item.id);
          }}
          style={styles.buttonClick}>
          <View style={buttonClickOn === index && styles.buttonClickOn} />
        </TouchableOpacity>
        <Text style={styles.TextFlatList}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleSucess}
        onRequestClose={() => {
          setModalVisibleSucess(!modalVisibleSucess);
        }}>
        <TouchableWithoutFeedback
          style={styles.modalSucessBackground}
          onPress={() => {
            setModalVisibleSucess(!modalVisibleSucess);
          }}>
          <View style={styles.modalSucessBackground}>
            <TouchableWithoutFeedback>
              <View style={styles.modalSucess}>
                <Icon name="checkcircleo" size={25} color="#000000" />
                <Text style={styles.textModalSucess}>
                  Lista atualizada com sucesso!
                </Text>
                <TouchableOpacity
                  style={styles.buttonModalSucess}
                  onPress={() => setModalVisibleSucess(!modalVisibleSucess)}>
                  <Text style={styles.textStyleSave}>OK</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback
          style={styles.centeredView}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <View style={styles.headerHender}>
                  <Text style={styles.textHeader}>Salvar filme em....</Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Icon style={styles.iconClose} name="close" solid />
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={dataList && dataList}
                  keyExtractor={(item, index) => index}
                  renderItem={renderItem}
                  contentContainerStyle={styles.containerFlatList}
                />
                <TouchableOpacity
                  style={
                    typeof buttonClickOn === 'number'
                      ? styles.buttonSave
                      : [styles.buttonSave, {backgroundColor: '#C4C4C4'}]
                  }
                  onPress={() => {
                    listId &&
                      listId &&
                      postMovieFavoriteList(listId, sessionId, {
                        media_id: movieId,
                      });
                    typeof buttonClickOn === 'number' &&
                      setModalVisibleSucess(!modalVisibleSucess);
                    typeof buttonClickOn === 'number' &&
                      setModalVisible(!modalVisible);
                  }}>
                  <Text
                    style={
                      typeof buttonClickOn === 'number'
                        ? styles.textStyleSave
                        : [styles.textStyleSave, {color: '#8E8E8E'}]
                    }>
                    Salvar
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity
        style={styles.containerOpenModal}
        onPress={() => {
          setModalVisible(true);
          setButtonClickOn(null);
        }}>
        <Icon style={styles.iconOpenModal} name="plus" size={25} />
        <Text style={styles.textOpenModal}>Adicionar a uma lista</Text>
      </TouchableOpacity>
    </View>
  );
}
