import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerNotify: {
    position: 'absolute',
    top: 16,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: 'lightslategrey',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifyActive: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    right: 0,
    width: 12,
    height: 12,
    backgroundColor: 'red',
    borderRadius: 6,
  },
  userText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#ddd',
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
export default styles;
