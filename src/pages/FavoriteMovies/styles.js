import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',


    },
    BoxButtonAndText: {
        // backgroundColor: 'pink',
        height: 200,
        width: '100%',


    },
    buttonBack: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 40,
        position: 'absolute',
        top: 57,
        left: 20,
        justifyContent: 'center'
    },
    containerText: {
        fontSize: 20,
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        top: 122,
        right: 65,
        left: 65,
    },
    userText: {
        fontSize: 20,
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        top: 122,
        right: 65,
        left: 65,
        color: 'pink',
    },

    boxImage: {
        flex: 1,
        // backgroundColor: 'blue',
        justifyContent: 'space-between',
        height: 150,
        width: '100%',
        alignItems: 'center',

    },
    imageFlatList: {

        width: 80,
        height: 104.16,
        borderRadius: 15,


    },







})
export default styles