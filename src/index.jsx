import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from "./components/pages/routes";
import stores,{ history } from "./store";

const renderApp = (RouteComponent, reduxStore) => {
	render(
		<AppContainer>
			<Provider store={reduxStore}>
				<ConnectedRouter history={history}>
					<RouteComponent />
				</ConnectedRouter>
			</Provider>
		</AppContainer>	 ,
		document.getElementById("catnull")
	);
};

renderApp(Routes,stores);

if (module.hot) {
	module.hot.accept("./components/pages/routes",() => renderApp(Routes,stores));
}
