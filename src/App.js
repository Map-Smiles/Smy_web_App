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

function App() {
	const { isMobile } = useIsMobile()
	console.log(isMobile)

	return isMobile ? (
		<ThemeProvider theme={theme}>
			<Grid
				gap={2}
				columns={['1fr']}
				css={{
					height: '100vh',
					width: '100%',
					marginTop: '1em',
					padding: '1em .525em',
				}}
			>
				<ThemeButton />
				<Router>
					<Routes />
				</Router>
			</Grid>
		</ThemeProvider>
	) : (
		<ErrorPage />
	)
}

export default App
