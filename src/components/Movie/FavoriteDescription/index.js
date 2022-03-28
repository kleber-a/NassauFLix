import React, {useState, useEffect, useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {AuthContext} from '../../../context/auth';

export default function FavoriteDescription({navigation}) {
  const [name, setName] = useState(null);
  const {account} = useContext(AuthContext);

  useEffect(() => {
    if (account.name) {
      setName(account.name);
    } else {
      setName(account.username);
    }
  }, [account]);

  return (
    <>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} style={{color: 'black'}} />
      </TouchableOpacity>
      <Text style={styles.containerText}>
        Filmes favoritos do <Text style={styles.userText}>{name && name}</Text>
      </Text>
    </>
  );
}
