import React, {useState, useEffect} from 'react';
import styles from './styles';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Loading from '../../components/Loading';
import {getDetailsList} from '../../service/api';
import MovieImage from '../../components/Movie/MovieImage';
import ButtonReturn from '../../components/ButtonReturn';

export default function ListMovies({navigation}) {
  const [detailsList, setDetailsList] = useState(null);

  async function awaitDetailsList() {
    const dataDetailsList = await getDetailsList(8197836);
    setDetailsList(dataDetailsList);
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      awaitDetailsList();
    });
  }, [navigation]);

  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <ButtonReturn navigation={navigation} />
        <Text style={styles.nameList}>{detailsList.name}</Text>
        <Text style={styles.descriptionList}>{detailsList.description}</Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('movies', [item.id, 'movie']);
        }}
        style={styles.boxImage}>
        <MovieImage pathImage={item.poster_path} posterSize={'w92'} />
      </TouchableOpacity>
    );
  };

  return detailsList ? (
    <View style={styles.container}>
      <FlatList
        data={detailsList.items}
        ListHeaderComponentStyle={styles.containerHeaderFlatList}
        ListHeaderComponent={renderHeader}
        columnWrapperStyle={styles.wrapperColumn}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={4}
      />
    </View>
  ) : (
    <View style={styles.containerLoading}>
      <Loading />
    </View>
  );
}
