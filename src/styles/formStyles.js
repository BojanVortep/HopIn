import { StyleSheet } from 'react-native';

export const FormStyles = StyleSheet.create({
    filterContainer:
        {
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
            paddingHorizontal: '5%'
        },
    pickerContainer:
        {
            height: 30,
            marginVertical: '2%',
            paddingHorizontal: '5%',
            paddingBottom: 10,
            borderWidth: 1,
            borderColor: '#1f3659',
            borderRadius: 10,
            color: '#1f3659',
            alignItems: 'stretch',
            justifyContent: 'center'
        },
    buttonsContainer:
        {    
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginVertical: '1%',
        },
    clearButtonStyle:
        {    
            backgroundColor: '#5799a6',
            textTransform: 'capitalize',
            marginRight: '2%'
        },
    searchButtonStyle:
        {    
            backgroundColor: '#1f3659',
            marginLeft: '2%'
        }
  });