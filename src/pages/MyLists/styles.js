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
    height: 430,
    marginTop: 20,
  },
  boxLista: {
    backgroundColor: '#8F9AFC',
    width: '90%',
    height: 80,
    marginTop: 15,
    borderRadius: 10,
    marginLeft: 20,
  },
  numberMovies: {
    top: 20,
    marginLeft: 10,
  },
  nameList: {
    marginLeft: 10,
    marginTop: 10,
  },

  del: {
    backgroundColor: '#E9A6A6',
    width: 30,
    height: 80,
    alignSelf: 'flex-end',
    bottom: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius:10,
    borderTopRightRadius:10

  },
  viewplus: {
    width: '100%',
    height: 60,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  add: {
    backgroundColor: '#E9A6A6',
    borderRadius: 30,
    width: 51,
    height: 51,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 30,
    marginVertical:'50%'
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
    fontSize:12
  },
  descriptionListModal: {
    backgroundColor: '#C4C4C4',
    width: '80%',
    height: 60,
    marginTop: 9,
    borderRadius:10,
    paddingHorizontal: 20,
    fontSize:12

  },
  //Fim Box Input
  boxButtonModal: {
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  buttonCancelModal:{
    width:105,
    height:28,
    backgroundColor:'white',
    borderRadius:7,
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonSaveModal:{
    width:105,
    height:28,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center'
  },
  textButtonModal:{
      fontSize:12,
      fontWeight:'700'
  }
  //Fim Modal
});

export default styles;
