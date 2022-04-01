import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  containerRenderHeader:{
    backgroundColor:'yellow',
    marginBottom:15
  },
  backGroundtvShow: {
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
    width: '100%',
    backgroundColor: 'green',
  },
  containerDetails: {
    width: '50%',
    backgroundColor: 'yellow',
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
  },
  detailsTvShowAge: {
    fontSize: 10,
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

  detailRatedLiked: {
    backgroundColor: '#AFAF',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    width:332,
    backgroundColor: '#fff',
    marginHorizontal:20
  },
  textDetailsTvDescription:{
    fontSize:12,
    fontFamily:'Open Sans',
    fontWeight:'400',
    justifyContent:'center'
  },
  containerSeasons: {
    width: 400,
    height: 42,
    marginVertical: 2,
    alignContent: 'center',
    backgroundColor: '#FFFFFF80',
    borderRadius: 5,
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
  textSeasons: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    left: 15,
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
  icon: {
    color: '#fff',
    top: 15,
    marginLeft: 100,
  },

  descriptionTvShow: {
    textAlign: 'justify',
    color: '#FFFFFF',
    fontSize: 12,
    width: '90%',
    fontFamily: 'Open Sans',
  },
  nameTvShow: {
    color: 'white',
    fontSize: 15,
  },
});

export default styles;
