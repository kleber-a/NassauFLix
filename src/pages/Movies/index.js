import { View, Text, Image, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import { getCredits, getDetails } from '../../service/api';
import styles from './styles';
import HeaderMovies from '../../components/HeaderMovies';

export default function Movies({ route, navigation }) {
  const [id] = route.params;
  const [cast, setCast] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function awaitGetCredits() {
      try {
        const dataCredits = await getCredits(id);
        setCast(dataCredits.cast);
      } catch (error) {
        console.log(error);
      }
    }
    awaitGetCredits();
  }, [id]);

  useEffect(() => {
    async function awaitGetDetails() {
      try {
        const dataDetails = await getDetails(id);
        setDetails(dataDetails);
      } catch (error) {
        console.log(error);
      }
    }
    awaitGetDetails();
  }, [id]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.containerCast}>
        <View style={styles.containerProfileImg}>
          {item.profile_path === null ? (
            <Text style={styles.userText}>{item.name[0]}</Text>
          ) : (
            <Image
              style={styles.imageFlatList}
              source={{
                uri: `https://image.tmdb.org/t/p/w45/${item.profile_path}`,
              }}
            />
          )}
        </View>
        <View style={styles.containerProfileText}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.character}>{item.character}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {cast && details ? (
        <FlatList
          data={cast}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          ListHeaderComponent={
            <HeaderMovies
              details={details}
              route={route}
              navigation={navigation}
            />
          }
        />
      ) : (
        <View style={styles.containerLoading} >
          <Loading />
        </View>
      )}
    </View>
  );
}
