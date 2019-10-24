import React from "react";
import {View, Text} from "react-native";
import {Container} from "native-base";

import MapContainer from "../containers/MapContainer/MapContainerIndex";

class Home extends React.Component {

    componentDidMount() {
        this.props.setName();
    }

    render() {

           /*  const region = {
                latitude: 41.737472,
                longitude: 22.193586,
                latitudeDelta:0.0922,
                longitudeDelta:0.0421
            } */

        return (
            <Container style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Hello {this.props.name} </Text>
                {/* <MapContainer region={region} /> */}
            </Container>
        );
     
    }
}

export default Home;