import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

export default function UserImage({icon, notify, size}) {
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

  return (
    <View style={styles.containerNotify}>
      {isNotifyActive()}
      {isImage()}
    </View>
  );
}
