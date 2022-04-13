import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  containerDetails: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '5%',

  },
  detaisMoviesTitle: {
    width: '72%',
    padding: 16,
    alignItems: 'flex-start',
  },
  detailsTvShow: {
    backgroundColor: 'pink',
    flexDirection: 'row',
    width: '100%',
    height: 128,
    paddingHorizontal: 20,
  },
  containerMovieImg: {
    position: 'relative',
    top: -60,
    marginBottom: -60,
  },
  detailsTvShowTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  detailsTvShowAge: {
    fontSize: 10,
    color: 'white',
  },
  criatedText: {
    fontSize: 10,
    color: 'white',
  },
  criatedName: {
    fontWeight: '700',
  },
  boxDetailsIcons: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerOverView: {
    alignSelf: 'center',
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: '5%',

  },
});

export default styles;
