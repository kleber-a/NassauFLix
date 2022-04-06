import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modalView: {
        width: '100%',
        height: 232,
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 12,


    },
    containerFlatList: {
        width: '100%',
        paddingHorizontal: 26,
        paddingVertical: 22,
    },

    containerRenderItem: {
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-start',

    },
    headerHender: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    textHeader: {
        fontSize: 13,
        textAlign: 'center',
        fontFamily: 'Source Sans Pro',
        fontWeight: 'bold',
        color: '#000000',
    },

    buttonClickOff: {


        width: 25,
        height: 25,
        backgroundColor: 'green',
        borderRadius: 25,
        borderWidth: 2,


    },

    buttonClickOn: {

        width: 25,
        height: 25,
        backgroundColor: 'green',
        borderRadius: 25,
        borderWidth: 2,

    },
    TextFlatList: {
        marginLeft: 12,
        fontSize: 12,
        color: 'black',


    },

    iconClose: {


    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: '#BEBEBE',
    },



    button: {
        borderRadius: 20,
        padding: 1,
        elevation: 2
    },
    containerPressable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#C4C4C4",
        borderRadius: 20,
    },
    buttonOpen: {
        backgroundColor: "#C4C4C4",
    },


    buttonSave: {
        alignSelf: 'center',
        backgroundColor: "black",
        width: 83.22,
        height: 20.22,
        borderRadius: 5,
    },
    textStyleSave: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: 'Open Sans'
    },



    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: 'Open Sans'
    },
    modalText: {
        textAlign: "center"
    },
    icon: {

        backgroundColor: 'white',
        borderRadius: 35,

    },
});
export default styles;