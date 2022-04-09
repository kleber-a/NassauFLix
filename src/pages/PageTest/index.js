import React, { useEffect, useContext, useState} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import { getDetails, getDetailsList, getList } from '../../service/api';
import { AuthContext } from '../../context/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function PageTest() {
    const { account, sessionId, logout } = useContext(AuthContext);
  const [evaluation, setEvaluation] = useState(null);
  const [type, setType] = useState('movies');
  const[movieDelete, setMovieDelete] = useState({media_id:1})

  async function removeMovieList() {
    try {
      const {data} = await axios.post(
        `https://api.themoviedb.org/3/list/8198000/remove_item?api_key=c3dc5cb91b1c309207a60a76c5742842&session_id=${sessionId}`,{media_id:1}
      );

      console.warn(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    async function PageTest() { 
        // const lista = await getList(account.id, sessionId, '1')
        // console.warn(lista)
        const datailsLista = await getDetailsList(8198000)
        console.warn(datailsLista)
    }
    PageTest()
  },[])
  
  return (
  <TouchableOpacity onPress={() => removeMovieList()}>
      <AntDesign name="arrowleft" size={25} />
  </TouchableOpacity>
  )}
