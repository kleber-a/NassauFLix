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

  detailRatedLiked: {
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
  detailsLiked: {
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
  detailsTvDescription: {
    color: '#fff',
   backgroundColor:"#fff",
    alignItems: 'center',
  },
  containerSeasons: {
    width: 400,
    height: 42,
    margin: 5,
    alignContent:'center',
    backgroundColor: '#FFFFFF80',
    borderRadius: 5,
  
  },
  containerEpisodes:{
    alignContent:'center',
    backgroundColor: '#FFFFFF80',
    borderRadius: 5,
    height: 42,
    margin: 5,
    width: 400,
    
  },
  textSeasons: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    left: 15,
  },
  textEpisode: {
    fontSize: 7,
    color: '#fff',

  },
  icon:{
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
