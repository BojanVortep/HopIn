import { StyleSheet, Dimensions } from 'react-native';

let height = Dimensions.get('window').height

export const DetailsScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
      },
      header: {
        paddingTop: 10,
        //paddingBottom: 10,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: "500"
      },
      feed: {
        marginHorizontal: 16
      },
      feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
      },
      avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
      },
      name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
      },
      timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
      },
      post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
      },
      postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
      },
    detailsContainer:
    {
        marginHorizontal: '3%',
        marginVertical: 15,
        marginLeft: -45,
        flexDirection: "row"
    },
    viewLabelsWrap:
    {
        flexDirection: "column",
        width: "50%",
        alignItems: "flex-start",
        //marginLeft: "3%",
        justifyContent: 'flex-start'

    },
    viewResultsWrap:
    {
        flexDirection: "column",
        width: "50%",
        alignItems: "flex-start",
        marginLeft: "5%",
        justifyContent: 'space-between'
    },
    viewWrap:
    {
        flexDirection: "column",
        marginTop: "4%",
        marginBottom: "4%"
    },
    listLabel:
    {
        fontSize: 15,
        padding: '1%',
        color: "#1f3659",
        fontWeight: "bold"
    },
    listData:
    {
        fontSize: 15,
        paddingHorizontal: '1%',
        color: "#5799a6",
    },

});
