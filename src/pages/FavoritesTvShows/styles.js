import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#000000',
    },
    textFavoritesTvShow:{
        color:"#ffffff",
        fontFamily:"open sans",
        fontSize:20,
    },
    boxHeader:{
        
        height:"10%",
        width:"100%",
        marginVertical:"5%",
        alignItems:"center",
        justifyContent:"center",
        
        
    },
    return:{
        backgroundColor:"#ffffff",
        borderRadius:15,
        width:30,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
        left:15

    },
    button:{
        color:"#000000",
    },

    boxFlatList:{
        marginLeft:17,
        height:"100%", 
        justifyContent:"center",
       
    },
    containerAvaluation: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 4,
      },
      avaluationstyle: {
        flexDirection: 'row',
        fontSize: 12,
        fontWeight: '600',
        color: '#FFFFFF',
        marginLeft: 8,
        fontFamily: 'open sans',
      },
      icon: {
        color: '#EC2626',
        fontSize: 12,
      },
      Image:{
         height:75,
         width:75,
         justifyContent:"center",
      },
      boxImage:{
          alignItems:"center",
          justifyContent:"center",
          width:92,
          height:170,
          
      },

});

export default styles;
