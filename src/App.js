import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import useIsMobile from './hooks/useIsMobile'

//Sytles
import { ThemeProvider, Grid } from 'theme-ui'
import theme from './styles/theme'

//Components
import Routes from './routes'
import ErrorPage from './components/pages/ErrorPage'
import ThemeButton from './components/atoms/Buttons/ThemeButton'
import Header from './components/organism/Header'
import BottomNavigation from './components/molecules/BottomNavigation'
import Drawer from './components/organism/Drawer'

//Utils
import { getHealthCheck } from './utils/api'

function App() {
	const { isMobile } = useIsMobile()
	getHealthCheck()
	return isMobile ? (
		<ThemeProvider theme={theme}>
			<Grid
				columns={['1fr']}
				sx={{
					height: '100%',
					MaxWidth: '100vw',
					margin: 0,
					padding: '0 15px',
				}}
			>
				<Router>
					{/* <Header /> */}
					<ThemeButton />
					<Routes />
					<Drawer />
					<BottomNavigation />
				</Router>
			</Grid>
		</ThemeProvider>
	) : (
		<ErrorPage />
	)
}

export default App
