import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  containerHeaderFlatList: {
    alignContent: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  containerHeader: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  nameList: {
    width: 215,
    fontFamily: 'Open Sans',
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'center',
    fontWeight: '700',
    color: '#E9A6A6',
    marginBottom: 26,
  },
  descriptionList: {
    fontFamily: 'Open Sans',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'justify',
    fontWeight: '400',
    color: '#FFFFFF',
  },
  boxImage: {
    marginHorizontal: 7,
    marginVertical: 7,
    height: 95,
    width: 76,
  },
});
export default styles;
