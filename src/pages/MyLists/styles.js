import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: '#FFF',
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  boxText: {
    alignItems: 'center',
    marginTop: 30,
  },
  containerLista: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
  },
  boxLista: {
    backgroundColor: '#8F9AFC',
    width: '90%',
    height: 80,
    marginTop: 15,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  boxDescription: {
    width: 200,
    height: '100%',
    paddingHorizontal: 40,
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  numberMovies: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },
  nameList: {
    width: 160,
    marginTop: 2,
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },

  del: {
    backgroundColor: '#E9A6A6',
    width: 30,
    height: 80,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  viewplus: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  add: {
    bottom: 35,
    right: 40,
    position: 'absolute',
    backgroundColor: '#E9A6A6',
    borderRadius: 30,
    width: 51,
    height: 51,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    zIndex: 1,
  },
  //Início Modal
  backgroundModal: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerModal: {
    width: '90%',
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: '50%',
  },
  boxTextModal: {
    //Inicio Box Text
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textModal: {
    color: 'black',
    fontSize: 17,
    fontWeight: '900',
  },
  //Fim Box Text

  boxInputModal: {
    //Inicio Box Input
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },
  nameListModal: {
    backgroundColor: '#C4C4C4',
    width: '80%',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 12,
  },
  descriptionListModal: {
    backgroundColor: '#C4C4C4',
    width: '80%',
    height: 60,
    marginTop: 9,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 12,
  },
  //Fim Box Input
  boxButtonModal: {
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonCancelModal: {
    width: 105,
    height: 28,
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSaveModal: {
    width: 105,
    height: 28,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonModal: {
    fontSize: 12,
    fontWeight: '700',
  },
  //Fim Modal

  containerAnimated: {
    width: '90%',
    height: 40,
    backgroundColor: '#1ed92b',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    bottom: 100,
    position: 'absolute',
    zIndex: 2,
  },
  boxAnimated: {
    flexDirection: 'row',
    width: 130,
    justifyContent: 'space-between',
  },
  textAnimated: {
    color: 'black',
    fontSize: 17,
    fontWeight: '900',
  },
  Icon: {
    backgroundColor: '#eee',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonx: {
    width: 40,
    height: 40,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
