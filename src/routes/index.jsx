import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

//components
import Home from '../components/pages/Home'
import Pockets from '../components/pages/Pockets'
import Map from '../components/pages/Map'
import Scan from '../components/pages/Scan'
import BottomNavigation from '../components/molecules/BottomNavigation'
import NotFound from '../components/pages/NotFound'

function Routes() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/pockets">
					<Pockets />
				</Route>
				<Route exact path="/map">
					<Map />
				</Route>
				<Route exact path="/scan">
					<Scan />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
			<BottomNavigation />
		</>
	)
}

export default Routes
