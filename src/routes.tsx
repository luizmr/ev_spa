import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';

const routeOptions = [
	{
		key: 'home',
		Component: <HomePage />,
		path: '/',
	},
];

interface RouteInterface {
	key: string;
	path: string;
	Component: any;
}

export const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				{routeOptions.map((route: RouteInterface) => (
					<Route
						key={route.key}
						path={route.path}
						element={route.Component}
					/>
				))}
			</Routes>
		</Router>
	);
};
