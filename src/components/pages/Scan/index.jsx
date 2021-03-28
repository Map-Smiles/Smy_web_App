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
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100%',
				outlineColor: (theme) => theme.colors.backgroundGlass,
				outlineWidth: '-8px',
				outlineOffset: '-15px',
			}}
		>
			<canvas id="canvas" width={375} height={675}></canvas>
		</Container>
	)
}

export default Scan
