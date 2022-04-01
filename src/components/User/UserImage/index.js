import React, {useContext, useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {AuthContext} from '../../../context/auth';
import {getChangeMovies} from '../../../service/api';
import styles from './styles';

export default function UserImage({size}) {
  const [notify, setNotify] = useState(null);
  const [icon, setIcon] = useState(null);
  const {account} = useContext(AuthContext);

  useEffect(() => {
    if (account.name) {
      setIcon(
        account.avatar.tmdb.avatar_path === null
          ? account.name[0]
          : account.avatar.tmdb.avatar_path,
      );
    } else {
      setIcon(
        account.avatar.tmdb.avatar_path === null
          ? account.username[0]
          : account.avatar.tmdb.avatar_path,
      );
    }
    async function awaitChange() {
      const newMovies = await getChangeMovies(new Date());
      setNotify(newMovies.results);
    }
    awaitChange();
    return () => {
      setNotify(null);
      setIcon(null);
    };
  }, [account]);

  return (
    notify &&
    icon && (
      <View
        style={[
          styles.containerNotify,
          {
            width: size,
            height: size,
          },
        ]}>
        {notify.length > 0 && <View style={styles.notifyActive} />}
        {icon.length === 1 ? (
          <Text style={styles.userText}>{icon}</Text>
        ) : (
          <Image
            style={styles.userImage}
            source={{
              uri: `http://image.tmdb.org/t/p/w45/${icon}`,
            }}
          />
        )}
      </View>
    )
  );
}
