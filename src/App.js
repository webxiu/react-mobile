import React from "react";
import { RootRouter } from "./router";
import { withRouter } from "react-router-dom";
function App({ location }) {
	return (
		<RootRouter />
	);
}

export default withRouter(App);
