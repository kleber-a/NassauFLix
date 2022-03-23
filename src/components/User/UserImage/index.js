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
  }, [account]);

  const isNotifyActive = () => {
    if (notify && notify.length > 0) {
      return <View style={styles.notifyActive} />;
    }
  };

  const isImage = () => {
    if (icon && icon.length === 1) {
      return <Text style={styles.userText}>{icon}</Text>;
    } else {
      return (
        <Image
          style={styles.userImage}
          source={{
            uri: `http://image.tmdb.org/t/p/w45/${icon}`,
          }}
        />
      );
    }
  };

  async function awaitChange() {
    const newMovies = await getChangeMovies(new Date());
    setNotify(newMovies.results);
  }
  awaitChange();

  return (
    <View style={styles.containerNotify}>
      {isNotifyActive()}
      {isImage()}
    </View>
  );
}
