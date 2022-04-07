import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({



  rating: {
    backgroundColor: '#E9A6A6',
    alignItems: 'center',
    justifyContent: 'center',
    width: 116,
    height: 22,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
  },


  ratingText: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '900',
    color: '#000',
  },

  ratingContainerIcon: {
    backgroundColor: '#C4C4C4',
    borderRadius: 50,
    padding: 3,
    position: 'absolute',
    right: -6,
    top: -6,
  },

  ratingIcon: {
    width: 9,
    height: 9,
  },

});

export default styles;
