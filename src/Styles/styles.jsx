import { StyleSheet } from "react-native";
import { COLORS } from '../../constants'
import { StatusBar } from 'react-native';

export default StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: COLORS.light,

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    expand: {
        flex: 1, height: '100%',
    },
    header: {
        height: 45,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,
        //paddingHorizontal:10,
    },
    row:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fab: {
        //position: 'absolute',
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fab2:{
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth:2,
        borderColor:COLORS.primary,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        borderRadius:5,
    },
    selected: {
        backgroundColor: COLORS.primary
    },
    unSelected: {
        backgroundColor: COLORS.light
    },
    inputContainer: {
        margin: 5,
        paddingHorizontal: 5,
        flexDirection:'row'
    },
    input: {
        //width: '100%',
        //flex:1,
        marginHorizontal:5,
        height: 35,
        borderBottomWidth: 1,
        borderColor: COLORS.primary,
        borderRadius:5,
        paddingHorizontal:10,
    },
    item:{
        backgroundColor:COLORS.white,
        borderRadius:10,
        marginHorizontal:5,
        marginVertical:2,
    }
})