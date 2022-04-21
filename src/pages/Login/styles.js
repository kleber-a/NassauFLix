import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
  },
  inputArea: {
    borderRadius: 35,
    alignItems: 'center',
    paddingBottom: 36,
  },
  banner: {
    flex: 1,
    top: -150,
    justifyContent: 'flex-end',
    alignContent: 'center',
    width: '100%',
    height: '100%',
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
    backgroundColor: '#C4C4C459',
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
    backgroundColor: '#E9A6A6',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    text: {
      paddingVertical: 8,
      paddingHorizontal: 24,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#1F1D36',
    },
  },
});

export default styles;
