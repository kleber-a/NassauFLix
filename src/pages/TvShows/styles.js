import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    resizeMode: 'cover',
  },
  //Header FlatList---
  containerRenderHeader: {
    marginBottom: 15,
  },
  backGroundHeader: {
    width: '100%',
    height: 170,
    position: 'relative',
  },
  containerButtonBack: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 19,
    left: 20,
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
    right: 10,
    borderRadius: 40,
    width: 30,
    height: 30,
  },
  buttonStar: {
    color: 'black',
  },
  detailsTvShow: {
    flexDirection: 'row',
    width: '100%',
  },
  capaTvShow: {
    position: 'relative',
    top: -35,
    marginLeft: 20,
    width: 116,
    height: 182,
    borderRadius: 8,
  },
  containerDetails: {
    width: '50%',
    justifyContent: 'space-around',
  },
  boxDetails1: {
    width: '100%',
    backgroundColor: 'pink',
    flexDirection: 'column',
    paddingLeft: 10,
  },
  detailsTvShowTitle: {
    fontSize: 20,
    fontWeight: '700',
    alignItems: 'flex-start',
    color:'white'
  },
  detailsTvShowAge: {
    fontSize: 10,
    color:'white'
  },
  boxDetails2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tvShowsRate: {
    color: '#E9A6A6',
    fontSize: 30,
    fontWeight: '400',
  },

  detailsLiked: {
    alignItems: 'center',
    justifyContent: 'center',
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

  detailsTvDescription: {
    width: 332,
    marginHorizontal: 20,
  },
  textDetailsTvDescription: {
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    justifyContent: 'center',
    color:'white'
  },

  //End Header FaltList

  //Render Item
  buttonSeason: {
    width: 400,
    height: 42,
    marginVertical: 5,
    backgroundColor: '#FFFFFF80',
    borderRadius: 5,
    flexDirection: 'row',
    borderBottomWidth: 4,
    borderBottomColor: '#E9A6A6',
  },
  listContainerSeasons: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 5,
  },
  textSeasons: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  containerEpisodes: {
    alignContent: 'center',
    backgroundColor: '#FFFFFF80',
    borderRadius: 5,
    height: 42,
    margin: 5,
    width: 400,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  containerText: {
    height: 25,
  },

  textEpisode: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  textTitleEpisode: {
    fontSize: 7,
    fontWeight: '40',
    color: '#fff',
  },
});

export default styles;
