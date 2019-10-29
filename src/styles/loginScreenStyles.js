import { StyleSheet } from 'react-native';

export const LoginScreenStyle = StyleSheet.create({

    imgBackground: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    linearGradient: {
        flex: 1,
        alignContent: 'center', 
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',       
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 18,
      },
      inputStyle: {
        marginLeft: 18,
        marginRight: 18,
        marginBottom: 18,
        backgroundColor: 'white',
        borderRadius: 10,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#1f3659',
        height: 42,
        width: 250,
        alignSelf: 'center'
    
      },
      roundedInput: {
        textAlign: 'center',
        //height: 43
        color: 'blue'
    },

});
