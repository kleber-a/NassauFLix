import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fullscreen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
  },

  //Box Perfil
  boxPerfil: {
    width: '100%',
    height: '36%',
    alignItems: 'center',
  },

  //Box Exit-------------
  buttonBoxExit: {
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
  TextBoxExit:{
    fontSize:10,
    fontWeight:'600'
  },


  //End Box Exit-------

  userBoxPerfil: {
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

  nameBoxPerfil: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },

  valueBoxPerfil: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    color: '#9C4A8B',
    fontFamily: 'open sans'
  },

  evaluationBoxPerfil: {
    fontSize: 11,
    fontWeight: '400',
    color: 'white',
  },
  //Fim Box Perfil

  //Box Button
  boxButton: {
    width: '100%',
    height: '10%',
    backgroundColor: 'black',
    flexDirection: 'row',
  },

  button1BoxButton: {
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
  button2BoxButton: {
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
  boxList: {
    height: '54%',
    width: '100%',
  },

  favoritesListBoxList: {
    width: '100%',
    height: '50%',
  },
  boxFavoritesList: {
    width: '100%',
    height: '14%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  textBoxFavoritesList: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFFFFF',
    paddingEnd: 100,
  },
  buttonBoxFavoritesList: {
    height: 15,
  },

  textButtonBoxFavoritesList: {
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

  buttonListBoxList:{
    width: 62,
    height: 93,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
  },

  evaluationListBoxList: {
    width: '100%',
    height: '50%',
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF30',
  },

  //End Box List
});

export default styles;
