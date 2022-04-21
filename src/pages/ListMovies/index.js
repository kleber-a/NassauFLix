import React, {useState, useEffect, useContext} from 'react';
import styles from './styles';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Loading from '../../components/Loading';
import {getDetailsList, removeMovieList} from '../../service/api';
import MovieImage from '../../components/Movie/MovieImage';
import ButtonReturn from '../../components/ButtonReturn';
import Icon from 'react-native-vector-icons/Octicons';
import Toggle from 'react-native-toggle-element';
import Pencil from 'react-native-vector-icons/EvilIcons';
import Eye from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../context/auth';
import formatDataFlatlist from '../../function/formDataFlatlist';
import ModalDeleteMovie from '../../components/ModalDelete/indexMovie';

export default function ListMovies({navigation, route}) {
  const [idList] = route.params;
  const [detailsList, setDetailsList] = useState(null);
  const [isEnable, setIsEnable] = useState(false);
  const {sessionId} = useContext(AuthContext);
  const [movieId, SetMovieId] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [modalVisibleSucess, setModalVisibleSucess] = useState(false);
  async function awaitDetailsList() {
    const dataDetailsList = await getDetailsList(idList);
    setDetailsList(dataDetailsList);
  }
  useEffect(() => {
    navigation.addListener('focus', () => {
      awaitDetailsList();
    });
    return () => {
      setDetailsList(null);
    };
  }, [idList, navigation]);

  async function deleteMovies(movieId) {
    await removeMovieList(detailsList.id, movieId, sessionId);
    awaitDetailsList();
  }

  useEffect(()=>{
    movieId && deleteMovies(movieId);
  },[movieId])

  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <ButtonReturn navigation={navigation} />
        <Toggle
          value={isEnable}
          onPress={newState => {
            setIsEnable(newState);
          }}
          containerStyle={styles.containerSwitch}
          trackBarStyle={styles.trackBarStyle}
          trackBar={styles.trackBar}
          thumbButton={styles.thumbButton}
          animationDuration={250}
          leftComponent={
            <Eye name={'eye'} size={14} color={isEnable ? '#000' : '#fff'} />
          }
          rightComponent={
            <Pencil
              name={'pencil'}
              size={18}
              color={isEnable ? '#fff' : '#000'}
            />
          }
        />
        <Text style={styles.nameList}>{detailsList.name}</Text>
        <Text style={styles.descriptionList}>{detailsList.description}</Text>
      </View>
    );
  };
  const renderItem = ({item}) => {
    if (item.empty === true) {
      return <View style={[styles.boxImage, styles.itemInvisible]} />;
    }
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            !isEnable && navigation.navigate('movie', [item.id, 'movie']);
          }}
          style={styles.boxImage}>
          <MovieImage pathImage={item.poster_path} posterSize={'w92'} />
          {isEnable && (
            <TouchableOpacity
              style={styles.boxDelete}
              onPress={() => {
                setModalVisibleSucess(true);
                setItemId(item.id);
              }}>
              <Icon name={'horizontal-rule'} size={6} color={'red'} />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
        <ModalDeleteMovie
          setModalVisibleSucess={setModalVisibleSucess}
          modalVisibleSucess={modalVisibleSucess}
          SetMovieId={SetMovieId}
          itemId={itemId}
        />
      </View>
    );
  };

  return detailsList ? (
    <View style={styles.container}>
      <FlatList
        data={formatDataFlatlist(detailsList.items, 4)}
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
