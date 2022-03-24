import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function TvShow({navigation}) {
    const lista = [1,2,3,4,5,6,7,8,9,10]
 return (
     <>
    <View>
        <TouchableOpacity
          style={{color:"red"}}
          onPress={() => navigation.goBack()}>
          <AntDesign style={{color:"red"}} name="arrowleft" size={25} />
        </TouchableOpacity>
    <Text>Filmes favoritos do <Text style={{color:"pink"}}>John!</Text></Text>
    
    <FlatList
    
        data={lista}
        numColumns={4}
        keyExtractor={(item, index) => item}

        renderItem={item => 
             <View>
                 <Image source={require("./aranha.png")}/>
                <Text style={{color:"black"}}>Nota</Text>
             </View>

        }
   
    />

  </View>
  </>
  );
}