import React, {useContext, useState, useEffect} from 'react';
import {Text} from 'react-native';
import {AuthContext} from '../../../context/auth';

export default function VerifyName({color}) {
  const {account} = useContext(AuthContext);
  const [name, setName] = useState(null);

  useEffect(() => {
    if (account.name) {
      setName(account.name);
    } else {
      setName(account.username);
    }
  }, [account.name, account.username]);
  return <Text style={{color: color}}>{name}</Text>;
}
