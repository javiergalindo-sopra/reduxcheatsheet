import { connect } from "react-redux";

import {
  counterIncrement,
  counterDecrement
} from "../../redux/counter/action-creators";

import App from "./App";

const mapStateToProps = storeRedux => ({
  counter: storeRedux.counter.number
});

const mapDispatchToProps = dispatch => ({
  counterIncrement: () => dispatch(counterIncrement()),
  counterDecrement: () => dispatch(counterDecrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
