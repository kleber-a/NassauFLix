import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import styles from './styles';
import ButtonReturn from '../../components/ButtonReturn';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../../context/auth';
import api,{addList} from '../../service/api';

export default function MyLists({navigation}) {
  const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const {account, sessionId, logout} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [alert,setAlert] = useState(false)
  
  const [onButton,setOnButton] = useState(false)
  const [list, setList] = useState({
    name: name,
    description: description,
    language: 'pt',
  });

  useEffect(() => {
    setList({
      name: name,
      description: description,
      language: 'pt',
    });
    
  }, [name, description]);

  async function postList(list, sessionId){
    const sucess = await addList(list, sessionId)
    console.warn(sucess.success)
    if(sucess.success === true){
      Alert.alert(
        'Lista Criada'
      )
    }else{
      Alert.alert(
        'Algo deu errado'
      )
    }
    setName('')
    setDescription('')
    setModalVisible(false)
  }

console.log(onButton)
  return (
    <View style={styles.container}>
      <ButtonReturn navigation={navigation} />
      <View style={styles.boxText}>
        <Text style={styles.text}>Minhas listas</Text>
      </View>
      <View style={styles.containerLista}>
        <ScrollView>
          {lista1.map(lista1 => (
            <TouchableOpacity style={styles.boxLista}>
              <Text style={styles.nameList}>
                Filmes que mudaram a minha vida 7 filmes
              </Text>
              <Text style={styles.numberMovies}>7 Filmes</Text>
              <TouchableOpacity style={styles.del}>
                <AntDesign name="delete" color="#EC2626" size={25} />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.viewplus}>
        <TouchableOpacity
          style={styles.add}
          onPress={() => setModalVisible(true)}>
          <Entypo name="plus" color="#000" size={38} />
        </TouchableOpacity>
        <Modal
          style={{alignItems: 'center', justifyContent: 'center'}}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.backgroundModalModal}>
            <View style={styles.containerModal}>
              <View style={styles.boxTextModal}>
                <Text style={styles.textModal}>Nova lista</Text>
              </View>

              <View style={styles.boxInputModal}>
                <TextInput
                  style={styles.nameListModal}
                  placeholder={'Nome da Lista'}
                  value={name}
                  onChangeText={text => setName(text)}
                />
                <TextInput
                  style={styles.descriptionListModal}
                  placeholder={'Descrição'}
                  value={description}
                  onChangeText={text => setDescription(text)}
                />
              </View>

              <View style={styles.boxButtonModal}>
                <TouchableOpacity
                  style={styles.buttonCancelModal}
                  onPress={() => [setModalVisible(false),setName(''),setDescription('')]}>
                  <Text style={[styles.textButtonModal, {color: 'black'}]}>
                    CANCELAR
                  </Text>
                </TouchableOpacity>
                {name !== '' && description !== '' ? (
                  <TouchableOpacity
                    style={[styles.buttonSaveModal, {backgroundColor:'black'}]}
                    onPress={() => postList(list, sessionId)}>
                    <Text style={[styles.textButtonModal, {color: 'white'}]}>
                      SALVAR
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View style={[styles.buttonSaveModal, {backgroundColor: 'rgba(0,0,0,0.4)',}]}>
                    <Text style={[styles.textButtonModal, {color: 'white'}]}>
                      SALVAR
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
