import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
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

    alignSelf: 'center',
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  modal: {
    alignItems: 'flex-start',
    width: '100%',
  },
});

export default styles;
