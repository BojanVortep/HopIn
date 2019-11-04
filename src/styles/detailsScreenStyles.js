import { StyleSheet, Dimensions } from 'react-native';

let height = Dimensions.get('window').height

export const DetailsScreenStyles = StyleSheet.create({
    offerDetailsContainer:
    {
        marginHorizontal: '3%',
        marginVertical: 5,
        flexDirection: "row"
    },
    detailsContainer:
    {
        marginHorizontal: '3%',
        marginVertical: 15,
        flexDirection: "row"
    },
    viewLabelsWrap:
    {
        flexDirection: "column",
        width: "50%",
        alignItems: "flex-start",
        borderColor: "#1f3659",
        borderRightWidth: 1,
        marginLeft: "3%",
        justifyContent: 'space-between'

    },
    viewResultsWrap:
    {
        flexDirection: "column",
        width: "40%",
        alignItems: "flex-start",
        marginLeft: "5%",
        justifyContent: 'space-between'
    },
    viewOfferDescriptionWrap:
    {
        marginHorizontal: '6%',
        marginTop: 5,
        marginBottom: 10,
        maxHeight:height - 485
    },
    viewMyOfferDescriptionWrap:
    {
        marginHorizontal: '6%',
        marginTop: 5,
        marginBottom: 10,
        maxHeight:height - 300
    },
    viewWrap:
    {
        flexDirection: "column",
        marginTop: "4%",
        marginBottom: "4%"
    },
    viewPadding:
    {
        paddingVertical: 10
    },
    viewPosition:
    {
        flexDirection: "row",
        justifyContent: "flex-end"
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
    descriptionText:
    {
        fontSize: 14,
        marginBottom: 5,
        color: "#1f3659"
    },
    icon:
    {
        fontSize: 16,
        color: "#1f3659",
    },
    textPadding:
    {
        paddingTop: 5
    },
    inputStyle:
    {
        width: "60%",

    },
    scrollViewStyle:
    {
        flex: 1
    },
    fontProperty:
    {
        fontWeight: "bold"
    }

});
