import { connect } from "react-redux";

import App from "./App";

const mapStateToProps = storeRedux => ({
  counter: storeRedux.counter.number
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
