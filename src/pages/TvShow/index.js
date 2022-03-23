import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function TvShow({navigation}) {
    const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
 return (
     <>
    <View style={style.container}>
        <TouchableOpacity
          style={style.return}
          onPress={() => navigation.goBack()}>
          <AntDesign style={style.button} name="arrowleft" size={25} />
        </TouchableOpacity>
        <View style={style.boxHeader}>
        <Text style={style.textFavoritesTvShow}>Filmes favoritos do <Text style={{color:"pink"}}>John!</Text></Text>
        </View>
    
    <View style={style.boxFlatList}>
    <FlatList
        
        data={lista}
        numColumns={4}
        keyExtractor={(item, index) => item}

        renderItem={item => 
             <View>
                <Image style={style.Image} source={require("./aranha.png")}/>
                <View style={style.containerAvaluation}>
                <Icon style={style.icon} name="star" />
                <Text style={style.avaluationstyle}>8/10</Text>
          </View>
             </View>

        }
   
    />
        </View>


  </View>
  </>
  );
}