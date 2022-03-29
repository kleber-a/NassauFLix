import {Text} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import styles from './styles';
import {AuthContext} from '../../context/auth';

export default function PopularDescription({type}) {
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
      <Text style={styles.greetingText}>
        Olá, <Text style={styles.greetingText__username}>{name && name}</Text>
      </Text>
      <Text style={styles.textDescription}>
        Reveja ou acompanhe os filmes que você assistiu...
      </Text>
      <Text style={styles.textPopularMovies}>{type} populares este mês</Text>
    </>
  );
}
