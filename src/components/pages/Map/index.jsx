/** @jsxRuntime classic */
/**@jsx jsx */
import * as React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'

import { jsx, useColorMode } from 'theme-ui'
import { getAllSpots } from '../../../utils/api'

//ENV
const { REACT_APP_MAPBOX_API_KEY } = process.env
const Map = ReactMapboxGl({
	accessToken: REACT_APP_MAPBOX_API_KEY,
})

function MapComponent() {
	const [zoom, setZoom] = React.useState(14)
	const [isLocationGranted, setisLocationGranted] = React.useState(false)
	const [spots, setSpots] = React.useState([])

	const [colorMode, setColorMode] = useColorMode('default')

	React.useEffect(() => {
		if (!isLocationGranted) return
	}, [])

	React.useEffect(() => {
		//eslint disable next line
		async function init() {
			try {
				const spots = await getAllSpots()
				setSpots(spots)
			} catch (err) {
				console.log(err)
			}
		}
		init()
	}, [spots])

	return (
		spots && (
			<div>
				<Map
					style="mapbox://styles/mapbox/streets-v11"
					containerStyle={{
						height: '100vh',
						width: '100%',
					}}
				>
					{spots &&
						spots.map((item) => (
							<Layer
								type="symbol"
								id="marker"
								layout={{ 'icon-image': 'marker-15' }}
							>
								<Feature coordinates={[item.longitude, item.latitude]} />
							</Layer>
						))}
				</Map>
				{spots && spots.map((item) => <p>opopo</p>)}
			</div>
		)
	)
}

export default MapComponent
