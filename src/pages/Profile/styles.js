import { StyleSheet } from 'react-native';

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
    height: '38%',
    alignItems: 'center',
  },

  //Button Exit-------------
  buttonExitPerfil: {
    width: 50,
    height: 14,
    backgroundColor: '#E9A6A6',
    alignSelf: 'flex-end',
    top: 20,
    borderRadius: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  TextExitPerfil: {
    fontSize: 10,
    fontWeight: '600',
  },

  //End Button Exit-------

  userPerfil: {
    width: 78,
    height: 78,
    backgroundColor: 'white',
    borderRadius: 40,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  namePerfil: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    marginBottom: 10,
  },

  valuePerfil: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: '700',
    color: '#9C4A8B',
    fontFamily: 'open sans',
  },

  evaluationPerfil: {
    fontSize: 11,
    fontWeight: '400',
    color: 'white',
    marginBottom: 22,
  },
  //Fim Box Perfil

  //Box Button
  containerButton: {
    width: '100%',
    height: '9%',
    backgroundColor: 'black',
    flexDirection: 'row',
  },

  buttonMovieContainer: {
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
  buttonTvShowContainer: {
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

  //Container List
  containerList: {
    height: '53%',
    width: '100%',
  },

  boxListMovie: {
    paddingTop: 5,
    alignSelf: 'center',
    width: '90%',
    height: '45%',
  },
  description: {
    width: '100%',
    height: '14%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 3,
    paddingHorizontal: 10,
  },
  textDescription: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  buttonDescription: {
    height: 15,
  },
  textButtonDescription: {
    color: '#E9A6A6',
    fontSize: 9,
    fontWeight: '600',
  },
  listFavorites: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignSelf: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  buttonListFavorites: {
    width: 67,
    height: 89,
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  //-----------------------
  boxListTvShow: {
    alignSelf: 'center',
    paddingHorizontal: '5%',
    paddingTop: 5,
    width: '100%',
    height: '55%',
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF30',
  },
  listRated: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  buttonListTvShow: {
    width: 58,
    height: 82,
    backgroundColor: 'white',
    marginHorizontal: 3,
    borderRadius: 10,
  },

  //End Container List
});

export default styles;
