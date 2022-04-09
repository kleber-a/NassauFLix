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
    marginTop: 30,
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
    marginLeft: 340,
    bottom: 49,
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
});

export default styles;
