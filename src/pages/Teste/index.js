import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../../context/auth';

export default function Teste() {
  const {account, sessionId, logout} = useContext(AuthContext);
  const [name, setName] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState();
  const [lista, setLista] = useState({
    name: name,
    description: description,
    language: 'pt',
  });

  useEffect(() => {
    setLista({
      name: name,
      description: description,
      language: 'pt',
    });
  }, [name, description]);

  async function addList(lista, sessionId) {
    try {
      const {data} = await axios.post(
        `https://api.themoviedb.org/3/list?api_key=c3dc5cb91b1c309207a60a76c5742842&session_id=${sessionId}`,
        lista,
      );
      console.warn(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        onPress={() => setModalVisible(true)}
        title="Modal"
        color={'pink'}
      />
      <Modal
        style={{alignItems: 'center', justifyContent: 'center'}}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.backgroundModal}>
          <View style={styles.containerModal}>
            <View style={styles.boxText}>
              <Text style={styles.text}>Nova lista</Text>
            </View>

            <View style={styles.boxInput}>
              <TextInput
                style={styles.nameList}
                placeholder={'Nome da Lista'}
                value={name}
                onChangeText={text => setName(text)}
              />
              <TextInput
                style={styles.descriptionList}
                
                placeholder={'Descrição'}
                value={description}
                onChangeText={text => setDescription(text)}
              />
            </View>

            <View style={styles.boxButton}>
              <TouchableOpacity style={styles.buttonCancel} onPress={() => setModalVisible(false)}>
                  <Text style={[styles.textButton,{color:'black'}]}>CANCELAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSave} onPress={() => console.warn("Funcionou")}>
                  <Text style={[styles.textButton,{color:'white'}]}>SALVAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
//addList(lista, sessionId)
const styles = StyleSheet.create({
  backgroundModal: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerModal: {
    width: '100%',
    height: '35%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 30,
  },
  boxText: {
    //Inicio Box Text
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 17,
    fontWeight: '900',
  },
  //Fim Box Text

  boxInput: {
    //Inicio Box Input
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },
  nameList: {
    backgroundColor: '#C4C4C4',
    width: '80%',
    height: '30%',
    borderRadius: 10,
    paddingHorizontal: 20
  },
  descriptionList: {
    backgroundColor: '#C4C4C4',
    width: '80%',
    height: '60%',
    marginTop: 9,
    borderRadius:10,
    paddingHorizontal: 20,

  },
  //Fim Box Input
  boxButton: {
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  buttonCancel:{
    width:105,
    height:28,
    backgroundColor:'white',
    borderRadius:7,
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonSave:{
    width:105,
    height:28,
    backgroundColor:'black',
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center'
  },
  textButton:{
      fontSize:12,
      fontWeight:'700'
  }
});
