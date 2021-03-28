/**@jsxRuntime classic */
/**@jsx jsx */
import * as React from 'react'
import { QrReader } from 'zxing-qr-reader'
import PropTypes from 'prop-types'

//Styles
import { Container, jsx } from 'theme-ui'

function Scan(props) {
	const [load, setLoad] = React.useState(false)
	const [error, setError] = React.useState(false)
	const [result, setResult] = React.useState(null)

	React.useEffect(() => {
		const canvas = document.getElementById('canvas') //get canvas
		const ctx = canvas.getContext('2d')
		var qr_reader = new QrReader(ctx)

		qr_reader.scan()

		qr_reader.on('found', (result) => {
			console.log(result)
		})

		return qr_reader.stop()
	}, [])

	return (
		<Container
			sx={{
				display: 'flex',
				top: 0,
				right: 0,
				left: 0,
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				maxWidth: '100%',
				height: '100%',
			}}
		>
			<div
				sx={{
					position: 'absolute',
					height: '100%',
					width: '100%',
					top: 0,
					right: 0,
					left: 0,
					bottom: 75,
					backgroundColor: 'transparent',
					outlineOffset: '-10em -5em -20em -5em',
					outlineColor: (theme) => theme.colors.backgroundGlass,
					outlineStyle: 'solid',
					outlineWidth: '10em 5em 20em 5em',
				}}
			></div>
			<canvas id="canvas" width={355} height={675}></canvas>
		</Container>
	)
}

export default Scan
