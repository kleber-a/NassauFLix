import { StyleSheet } from 'react-native';
import { HeaderHeightContext } from 'react-navigation-stack';

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDetails: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '5%',
  },

  containerMovieImg: {
    position: 'relative',
    top: -60,
    marginBottom: -60,
  },

  detaisMoviesTitle: {
    width: '72%',
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
    marginVertical: 10,
    alignItems: 'center',
  },
  modal: {
    alignItems: 'flex-start',
    width: '100%',
  },
});

export default styles;
