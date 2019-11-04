import { StyleSheet } from 'react-native';

export const ViewStyle = StyleSheet.create({
    containerStyle: {
      marginHorizontal: '2%',
      marginVertical: 8,
      borderWidth:0, 
      borderColor: '#ccc',
      flex: 1
    },
    header:
    {
      backgroundColor: '#1f5659',
      height:50
    },
    imageIconStyle: {
      width:26,
      height:26,
      borderColor:'green', 
      borderWidth:0,
      marginRight: 10
    },
    imageLogo: {
      width:164, 
      height:30,
      marginRight:5,
      borderColor:'green', 
      borderWidth:0
    },
    traderNameStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      width: '100%',
    },
    searchOfferContainerStyle: {
      flex: 1,
      flexDirection: 'column'
    }
});
