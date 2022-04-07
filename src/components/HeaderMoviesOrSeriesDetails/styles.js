import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDetails: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '10%',
  },

  containerMovieImg: {
    position: 'relative',
    top: -60,
  },

  detaisMoviesTitle: {
    width: '75%',
    padding: 16,
    alignItems: 'flex-start',
  },

  detailRatedLiked: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',

  },
  containerOverView: {
    width: '90%',
    marginVertical: 5,
    alignItems: 'center',
  },




});

export default styles;
