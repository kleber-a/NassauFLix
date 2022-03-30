import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  backGroundtvShow: {
    width: '100%',
    height: 170,
  },
  containerButtonBack: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 19,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 40,
    width: 30,
    height: 30,
  },
  buttonBack: {
    color: 'black',
  },
  containerButtonStar: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 19,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 40,
    width: 30,
    height: 30,
  },
  buttonStar: {
    color: 'black',
  },
  detailsTvShow: {
    flexDirection: 'row',
  },
  detailsTvShowTitle: {
    marginLeft: 10,
    width: 260,
    height: 120,
    alignItems: 'flex-start',
  },
  capaTvShow: {
    position: 'relative',
    top: -35,
    marginLeft: 20,
    width: 116,
    height: 182,
    borderRadius: 8,
  },
  titleTvShow: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    marginLeft: 16,
    marginTop: 15,
  },
  yearTvShow: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    color: '#FFFFFF',
  },
  timeTvShow: {
    fontSize: 7,
    color: 'white',
    fontFamily: 'Open Sans',
  },
  textAutor: {
    marginLeft: 16,
    color: 'white',
    fontSize: 8,
    fontFamily: 'Open Sans',
  },
  autorTvShow: {
    fontFamily: 'Open Sans',
    fontSize: 8,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  datailRatedLiked: {
    marginTop: -90,
    marginLeft: 145,
    width: 260,
    height: 40,
    flexDirection: 'row',
  },
  ratedTvShow: {
    marginLeft: 10,
    color: '#E9A6A6',
    fontSize: 30,
  },
  detailsRated: {
    width: 100,
    height: 50,
  },
  datailsLiked: {
    marginLeft: 31,
    width: 50,
    height: 50,
  },
  heartIcon: {
    color: 'red',
    alignSelf: 'center',
  },
  liked: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: 10,
  },
  detailsDescription: {
    width: '100%',
    marginTop: 25,
    alignItems: 'center',
  },
  containerSeasons: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    flex: 1,
  },
  textSeasons: {
    fontSize: 30,
  },
  textEpisode: {
    fontSize: 20,
  },
});

export default styles;
