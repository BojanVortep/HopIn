import {connect} from "react-redux";
import Home from "../views/Home";
import { setName } from "../actions/homeActions";

const mapStateToProps = (state) => ({
    name: state.home.name

});

const mapActionCreators = {
    setName
};

export default connect(mapStateToProps, mapActionCreators)(Home);