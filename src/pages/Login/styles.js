import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
  },
  info:{
    width:30,
    height:30,
    position:'absolute',
    alignSelf:'flex-end',
    top: 15,
    right: 15,
    zIndex:2
  },
  inputArea: {
    borderRadius: 35,
    alignItems: 'center',
    paddingBottom: 36,
  },
  banner: {
    flex: 1,
    top: 0,
    justifyContent: 'flex-end',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundMODAL:{
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEntry: {
    alignItems: 'center',
    login: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#fff',
    },
    description: {
      fontSize: 13,
      color: '#fff',
    },
  },
  logo: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: -50,
    marginHorizontal: 0,
  },
  input: {
    fontWeight: '400',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 30,
    width: 243,
    height: 33,
    flexDirection: 'row',
    paddingLeft: 40,
    paddingBottom: 8,
    fontSize: 10,
  },
  userIcon: {
    padding: 10,
    right: 100,
    top: 35,
  },
  lockIcon: {
    right: 100,
    top: 25,
  },
  textError: {
    fontWeight: '400',
    lineHeight: 13,
    fontSize: 10,
    color: '#EC2626',
    position: 'absolute',
    bottom: 13,
  },
  btnSubmit: {
    backgroundColor: '#C11518',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    text: {
      paddingVertical: 8,
      paddingHorizontal: 24,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#F3F3F3F3',
    },
  },
});

export default styles;
