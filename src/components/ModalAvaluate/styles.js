import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // containerTeste: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    top: 220,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 327,
    height: 166,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  textAvaluate: {
    color: '#000',
    lineHeight: 27,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Source Sans Pro',
  },
  inputGroup: {
    flexDirection: 'row',
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    width: 74,
    height: 21,
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
    borderRadius: 30,
    alignItems: 'center',
  },
  inputIcon: {
    marginHorizontal: 7,
  },
  input: {
    fontFamily: 'Source Sans Pro',
    fontSize: 12,
    fontWeight: '500',
    color: '#222',
    padding: 0,
    paddingHorizontal: 2,
    margin: 0,
  },
  inputText: {
    fontFamily: 'Source Sans Pro',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    width: 190,
    justifyContent: 'space-between',
  },
  buttonCancel: {
    height: 20,
    paddingHorizontal: 17,
    paddingVertical: 2.5,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    text: {
      color: '#000',
      fontFamily: 'Source Sans Pro',
      textTransform: 'uppercase',
      fontWeight: '700',
      fontSize: 10,
    },
  },
  buttonOk: {
    height: 20,
    backgroundColor: '#000',
    paddingHorizontal: 35,
    paddingVertical: 2.5,
    borderRadius: 5,
    justifyContent: 'center',
    text: {
      fontSize: 10,
      color: '#FFF',
      fontFamily: 'Source Sans Pro',
      textTransform: 'uppercase',
      fontWeight: '700',
    },
  },
});
export default styles;
