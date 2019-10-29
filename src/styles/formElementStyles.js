import { StyleSheet } from 'react-native';

export const FormElementStyles = StyleSheet.create({
    roundedInputItem: {
        marginLeft: '8%',
        marginRight: '8%',
        marginBottom: '2%',
        backgroundColor: 'white',
        borderRadius: 10
    },
    roundedBorderInputItem: {
        marginLeft: '8%',
        marginRight: '8%',
        marginBottom: '8%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#1f3659',
        height: 42
    },
    roundedInput: {
        textAlign: 'center',
        height: 43
    },
    roundedButtonItem: {
        marginLeft: '28%',
        marginRight: '28%',
        backgroundColor: 'white',
        borderRadius: 10
    },
    roundedButton: {
        alignContent: 'center',
        height: 35
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '600',
        top: 8,
        fontSize: 14
    },
    paddingView: {
        paddingBottom: 25,
        alignContent: 'space-around'
    },
    defaultShadow:
    {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    placeholderTextColor:
    {
        color: '#cecece'
    }
});
