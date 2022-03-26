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
        flexGrow: 1,
        // backgroundColor: 'blue',
        marginHorizontal: 4,
        marginVertical: 4,
        height: 120,
        width: 76,


    },
    imageFlatList: {

        width: 80,
        height: 104.16,
        borderRadius: 15,


    },







})
export default styles