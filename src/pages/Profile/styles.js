import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fullscreen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
  },

  //Box Perfil
  Perfil: {
    width: '100%',
    height: '36%',
    alignItems: 'center',
  },

  //Button Exit-------------
  buttonExitPerfil: {
    width: 50,
    height:14,
    backgroundColor: '#E9A6A6',
    alignSelf:'flex-end',
    top: 20,
    borderRadius: 20,
    marginRight:20,
    flexDirection:'row',
    justifyContent:'space-around'
    
  },
  TextExitPerfil:{
    fontSize:10,
    fontWeight:'600'
  },


  //End Button Exit-------

  userPerfil: {
    width: 78,
    height: 78,
    backgroundColor: 'white',
    borderRadius: 40,
    marginTop: 15,
    alignItems:'center',
    justifyContent:'center'
  },
  txtImageBoxPerfil:{
    fontSize:50,
    
  },
  imageUserBoxPerfil:{
    width:78,
    height:78,
    borderRadius:40
  },

  namePerfil: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },

  valuePerfil: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    color: '#9C4A8B',
    fontFamily: 'open sans'
  },

  evaluationPerfil: {
    fontSize: 11,
    fontWeight: '400',
    color: 'white',
  },
  //Fim Box Perfil

  //Box Button
  containerButton: {
    width: '100%',
    height: '10%',
    backgroundColor: 'black',
    flexDirection: 'row',
  },

  button1Container: {
    backgroundColor: 'black',
    width: '50%',
    height: '100%',
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#FFFFFF30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2Container: {
    backgroundColor: 'black',
    width: '50%',
    height: '100%',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#FFFFFF30',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //----------


  //Box List
  List: {
    height: '54%',
    width: '100%',
  },

  containerFavorite: {
    width: '100%',
    height: '50%',
  },
  boxList: {
    width: '100%',
    height: '14%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  textBoxList: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFFFFF',
    paddingEnd: 100,
  },
  buttonBoxList: {
    height: 15,
  },

  textButtonBoxList: {
    color: '#E9A6A6',
    fontSize: 9,
    fontWeight: '600',
  },

  listBoxList: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignSelf:'center',
    flexWrap: 'wrap',
    
  },

  buttonList:{
    width: 62,
    height: 93,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
  },

  evaluationContainerList: {
    width: '100%',
    height: '50%',
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF30',
  },

  //End Box List
});

export default styles;
