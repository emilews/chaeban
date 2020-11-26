import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TransitionWrapper from "../components/transition/TransitionWrapper";
import In from "../components/input/In";
import Out from "../components/output/Out";
const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return <Component {...props} />;
			}}
		/>
	);
};

const Routes = () => {
	const renderRoutes = () => {
		return (
			<div>
				<PrivateRoute exact path="/" component={TransitionWrapper(In)} />
				<PrivateRoute exact path="/output" component={TransitionWrapper(Out)} />
			</div>
		)
	}
	return (
		<Router>
			<div>
				{renderRoutes()}
			</div>
		</Router>
	);
};
export default Routes;
