import React, {useContext, useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {AuthContext} from '../../../context/auth';


export default function UserImg() {
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
    () => {};
  }, []);

  const Iimage = () => {
    if (icon && icon.length === 1) {
      return <Text style={{fontSize:50}}>{icon}</Text>;
    } else {
      return (
        <Image
          style={{width: 78, height: 78, borderRadius: 40}}
          source={{
            uri: `http://image.tmdb.org/t/p/w500/${icon}`,
          }}
        />
      );
    }
  };

  
  return(
   <>
     <Iimage />
   </>
  
  )
}
