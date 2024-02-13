import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Home = ({ match }) => (
	<Suspense fallback={<Loading cover='content' />}>
		<Switch>
			<Route path={`${match.url}/customers`} component={lazy(() => import(`./customers`))} />
			<Redirect from={`${match.url}`} to={`${match.url}/customers`} />
		</Switch>
	</Suspense>
);

export default Home;
