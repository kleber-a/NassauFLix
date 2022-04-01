import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList} from 'react-native';
import Loading from '../../components/Loading';
import {getInterations} from '../../service/api';
import MovieImage from '../../components/Movie/MovieImage';
import styles from './styles';
import {AuthContext} from '../../context/auth';
import ButtonReturn from '../../components/ButtonReturn';
import InterationDescription from '../../components/InterationDescription';

export default function InterationList({navigation, route}) {
  const [interation, type, nameInteration] = route.params;
  const [interations, setInterations] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const {account, sessionId} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  console.warn(type);
  async function awaitInteration() {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const dataInteration = await getInterations(
        interation,
        type,
        account.id,
        sessionId,
        page,
      );
      const result = dataInteration.results;
      setTotalPages(dataInteration.total_pages);
      setLoading(false);
      if (page <= totalPages) {
        setPage(page + 1);
        setInterations([...interations, ...result]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      awaitInteration();
    });
  }, [navigation]);

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <Loading />;
  };

  const renderHeader = () => {
    return (
      <View style={styles.containerHeader}>
        <ButtonReturn navigation={navigation} />
        <InterationDescription
          navigation={navigation}
          nameInteration={nameInteration}
        />
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.boxImage}>
        <MovieImage pathImage={item.poster_path} posterSize={'w92'} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {interations.length > 0 ? (
        <FlatList
          data={interations}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          renderItem={renderItem}
          onEndReached={page <= totalPages ? awaitInteration : null}
          onEndReachedThreshold={0.3}
          numColumns={4}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
