import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function FavoritesTvShows({navigation}) {
    const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
 return (
     <>
    <View style={styles.container}>
        <TouchableOpacity
          style={styles.return}
          onPress={() => navigation.goBack()}>
          <AntDesign style={styles.button} name="arrowleft" size={25} />
        </TouchableOpacity>
        <View style={styles.boxHeader}>
        <Text style={styles.textFavoritesTvShow}>Séries favoritas do <Text style={{color:"pink"}}>John!</Text></Text>
        </View>
    
    <View style={styles.boxFlatList}>
    <FlatList
        
        data={lista}
        numColumns={4}
        keyExtractor={(item, index) => item}

        renderItem={item => 
             <View>
                <Image style={styles.Image} source={require("./aranha.png")}/>
                <View style={styles.containerAvaluation}>
                <Icon style={styles.icon} name="star" />
                <Text style={styles.avaluationstyle}>8/10</Text>
          </View>
             </View>

        }
   
    />
        </View>


  </View>
  </>
  );
}