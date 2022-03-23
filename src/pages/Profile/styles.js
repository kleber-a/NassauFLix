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
    height: '40%',
    alignItems: 'center',
  },

  //Box Exit-------------
  boxExitBoxPerfil: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 30,
  },
  buttonBoxExit: {
    backgroundColor: 'yellow',
    top: 20,
    borderRadius: 20,
  },

  //End Box Exit-------

  userBoxPerfil: {
    width: 78,
    height: 78,
    backgroundColor: 'white',
    borderRadius: 40,
    marginTop: 15,
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
    color: 'white',
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
    height: '12%',
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

  //52% usado da altura

  //Box List
  boxList: {
    height: '48%',
    width: '100%',
  },

  favoritesListBoxList: {
    width: '100%',
    height: '50%',
    backgroundColor: 'blue',

  },    
  boxFavoritesList:{
    width:'100%',
    height:'20%',
    backgroundColor:'black',
    flexDirection:'row',
    justifyContent:'space-around',
    paddingTop:5
  },


  evaluationListBoxList: {
    width: '100%',
    height: '50%',
    backgroundColor: 'pink',
  },

  //End Box List
});

export default styles;
