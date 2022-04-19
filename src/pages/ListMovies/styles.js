import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerHeaderFlatList: {
    alignContent: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  containerHeader: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 18,
    paddingHorizontal: 15,
  },
  containerLoading: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperColumn: {
    paddingHorizontal: '5%',
    marginBottom: '6%',
    justifyContent: 'space-between',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  nameList: {
    width: '60%',
    fontFamily: 'Open Sans',
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'center',
    fontWeight: '700',
    color: '#E9A6A6',
    marginBottom: 26,
  },
  descriptionList: {
    width: '80%',
    fontFamily: 'Open Sans',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'justify',
    fontWeight: '400',
    color: '#FFFFFF',
  },
  boxImage: {
    height: 95,
    width: 76,
  },
  boxDelete: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    right: -5,
    top: -5,
    height: 18,
    width: 18,
    backgroundColor: 'white',
  },
  containerSwitch: {
    width: 76,
    position: 'absolute',
    height: 25,
    top: 25,
    right: 20,
  },
  trackBarStyle: {
    borderColor: '#E9A6A6',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  trackBar: {
    width: 76,
    height: 25,
  },
  thumbButton: {
    activeBackgroundColor: '#E9A6A6',
    inActiveBackgroundColor: '#E9A6A6',
    width: 37,
    height: 25,
  },
});
export default styles;
