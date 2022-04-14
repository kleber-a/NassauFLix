import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },

  wrapper: {
    marginHorizontal: '5%',
    justifyContent: 'space-between',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingBottom: 40,
    width: '100%',
  },
  containerImage: {
    flexShrink: 1,
    alignItems: 'center',
  },
  boxImage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 95,
    width: 76,
    margin: 20,
  },
});
export default styles;
