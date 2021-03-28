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
import { getHealthCheck } from './utils/api'

function App() {
	const { isMobile } = useIsMobile()
	getHealthCheck()
	return isMobile ? (
		<ThemeProvider theme={theme}>
			<Grid
				columns={['1fr']}
				sx={{
					height: '100vh',
					width: '100vw',
				}}
			>
				<Router>
					<Routes />
				</Router>
			</Grid>
			<ThemeButton />
		</ThemeProvider>
	) : (
		<ErrorPage />
	)
}

export default App
