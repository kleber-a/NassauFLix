import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import ButtonMovie from '../../components/ButtonMovie';
import ButtonSeries from '../../components/ButtonSeries';
import Exit from 'react-native-vector-icons/Ionicons';

export default function Profile() {
  const lista = [1, 2, 3, 4];
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  return (
    <View style={styles.fullscreen}>
      <View style={styles.boxPerfil}>
        <TouchableOpacity style={styles.buttonBoxExit}>
          <Exit size={10} name="exit-outline" />
          <Text style={styles.TextBoxExit}>Sair</Text>
        </TouchableOpacity>

        <View style={styles.userBoxPerfil} />
        <Text style={styles.nameBoxPerfil}>Jhon</Text>
        <Text style={styles.valueBoxPerfil}>30</Text>
        <Text style={styles.evaluationBoxPerfil}>Avaliações</Text>
      </View>

      <View style={styles.boxButton}>
        <TouchableOpacity
          style={styles.button1BoxButton}
          onPress={() => setLoading(!loading)}>
          <ButtonMovie loading={loading} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2BoxButton}
          onPress={() => setLoading1(!loading1)}>
          <ButtonSeries loading1={loading1} />
        </TouchableOpacity>
      </View>

      <View style={styles.boxList}>
        <View style={styles.favoritesListBoxList}>
          <View style={styles.boxFavoritesList}>
            <Text style={styles.textBoxFavoritesList}>
              Filmes favoritos de John
            </Text>
            <TouchableOpacity style={styles.buttonBoxFavoritesList}>
              <Text style={styles.textButtonBoxFavoritesList}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listBoxList}>
            {lista &&
              lista.map(lista => (
                <TouchableOpacity style={styles.buttonListBoxList} />
              ))}
          </View>
        </View>

        <View style={styles.evaluationListBoxList}>
          <View style={styles.boxFavoritesList}>
            <Text style={styles.textBoxFavoritesList}>
              Filmes favoritos de John
            </Text>
            <TouchableOpacity style={styles.buttonBoxFavoritesList}>
              <Text style={styles.textButtonBoxFavoritesList}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listBoxList}>
            {lista &&
              lista.map(lista => (
                <TouchableOpacity style={styles.buttonListBoxList} />
              ))}
          </View>
        </View>
      </View>
    </View>
  );
}
