import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import ButtonReturn from '../../components/ButtonReturn';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function MyLists({navigation}) {
  return (
    <View style={styles.container}>
      <ButtonReturn navigation={navigation} />
      <View style={styles.boxText}>
        <Text style={styles.text}>Minhas listas</Text>
      </View>
      <View style={styles.containerLista}>
      <ScrollView>
        {lista.map(lista => (
          <View style={styles.boxLista}>
            <Text style={styles.nameList}>
              Filmes que mudaram a minha vida 7 filmes
            </Text>
            <Text style={styles.numberMovies}>7 Filmes</Text>
            <TouchableOpacity style={styles.del}>
              <AntDesign name="delete" color="#EC2626" size={25} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      </View>
      <View style={styles.viewplus}>
        <TouchableOpacity
          style={styles.add}
          onPress={() => navigation.goBack()}>
          <Entypo name="plus" color="#000" size={38} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
