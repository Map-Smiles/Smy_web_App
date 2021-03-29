/** @jsxRuntime classic */
/**@jsx jsx */
import * as React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'
import Header from '../../organism/Header'

import { jsx, useColorMode } from 'theme-ui'
import { getSpots } from '../../../utils/api'

//ENV
const { REACT_APP_MAPBOX_API_KEY } = process.env

function MapComponent() {
	const [zoom, setZoom] = React.useState(14)
	const [center, setCenter] = React.useState({ lat: -25.4284, lon: -49.2733 })
	const [spots, setSpots] = React.useState([])

	const [colorMode, setColorMode] = useColorMode('default')

	const Map = ReactMapboxGl({
		accessToken: REACT_APP_MAPBOX_API_KEY,
	})
	React.useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords
			setCenter({ lat: latitude, lon: longitude })
		})
	}, [colorMode])

	React.useEffect(() => {
		//eslint disable next line
		async function init() {
			try {
				const spots = await getSpots()
				setSpots(spots)
			} catch (err) {
				console.log()
			}
		}
		init()
	}, [])

	return (
		<div>
			<Header />

			<Map
				style={
					colorMode === 'default'
						? 'mapbox://styles/mapbox/streets-v9'
						: 'mapbox://styles/mapbox/dark-v10'
				}
				containerStyle={{
					margin: 0,
					padding: 0,
					position: 'absolute',
					top: 0,
					right: 0,
					left: 0,
					height: '100%',
					width: '100%',
				}}
				center={[center.lon, center.lat]}
				zoom={[zoom]}
			>
				{spots.map((item) => (
					<Layer
						sx={{ margin: 0, padding: 0 }}
						type="symbol"
						id="marker"
						layout={{ 'icon-image': 'marker-15' }}
					>
						<Feature coordinates={[item.longitude, item.latitude]} />
						<Feature coordinates={[item.longitude, item.latitude]} />
						<Feature coordinates={[item.longitude, item.latitude]} />
					</Layer>
				))}
			</Map>
		</div>
	)
}

export default MapComponent
