import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Profile() {
  const lista = [1, 2, 3, 4];
  return (
    <View style={styles.fullscreen}>
      <View style={styles.boxPerfil}>
        <View style={styles.boxExitBoxPerfil}>
          <TouchableOpacity style={styles.buttonBoxExit}>
            <Text style={styles.TextBoxExit}>TesteBt</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userBoxPerfil} />
        <Text style={styles.nameBoxPerfil}>Jhon</Text>
        <Text style={styles.valueBoxPerfil}>30</Text>
        <Text style={styles.evaluationBoxPerfil}>Avaliações</Text>
      </View>

      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.button1BoxButton}>
          <Icon color={'white'} size={20} name="popcorn" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2BoxButton}>
          <Icon color={'white'} size={20} name="popcorn" />
        </TouchableOpacity>
      </View>

      <View style={styles.boxList}>
        <View style={styles.favoritesListBoxList}>
          <View style={styles.boxFavoritesList}>
            <Text style={styles.textBoxFavoritesList}>Filmes favoritos de John</Text>
            <TouchableOpacity style={styles.buttonBoxFavoritesList}>
              <Text style={styles.textButtonBoxFavoritesList}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <View
            style={styles.listBoxList}>
            {lista &&
              lista.map(lista => (
                <TouchableOpacity
                  style={{width: 62,height: 93,backgroundColor: 'white',marginLeft: 20,}}
                />
              ))}
          </View>
        </View>

        <View style={styles.evaluationListBoxList}>
          <View style={styles.boxFavoritesList}>
            <Text style={styles.textBoxFavoritesList}>Filmes favoritos de John</Text>
            <TouchableOpacity style={styles.buttonBoxFavoritesList}>
              <Text style={styles.textButtonBoxFavoritesList}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 30,
              flexWrap: 'wrap',
            }}>
            {lista &&
              lista.map(lista => (
                <TouchableOpacity
                  style={{width: 62,height: 93,backgroundColor: 'white',marginLeft: 20,}}
                />
              ))}
          </View>
        </View>
      </View>
    </View>
  );
}
