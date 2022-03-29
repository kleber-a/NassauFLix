import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  textFavoritesTvShow: {
    color: '#ffffff',
    fontFamily: 'open sans',
    fontSize: 20,
  },
  boxHeader: {
    height: '10%',
    width: '100%',
    marginVertical: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  return: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    left: 15,
  },
  button: {
    color: '#000000',
  },

  Image: {
    height: 75,
    width: 75,
    justifyContent: 'center',
  },
  boxImage: {
    alignContent:"center",
    justifyContent:"space-evenly",
    width: 86,
    marginHorizontal:"2%",
    marginTop:10,
    
  },
});

export default styles;
