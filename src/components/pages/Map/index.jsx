/** @jsxRuntime classic */
/**@jsx jsx */
import * as React from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp'
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'

import { jsx, useColorMode } from 'theme-ui'

//ENV
const { REACT_APP_MAPBOX_API_KEY } = process.env
mapboxgl.workerClass = MapboxWorker
mapboxgl.accessToken = REACT_APP_MAPBOX_API_KEY

function Map() {
	const [lng, setLng] = React.useState(-49.27)
	const [lat, setLat] = React.useState(-25.42)
	const [zoom, setZoom] = React.useState(9)

	const [colorMode, setColorMode] = useColorMode('default')

	const mapContainer = React.useRef()
	React.useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style:
				colorMode === 'dark'
					? 'mapbox://styles/mapbox/dark-v10'
					: 'mapbox://styles/mapbox/light-v10',
			center: [lng, lat],
			zoom: zoom,
		})
		return () => map.remove()
	}, [])

	return (
		<div>
			<div
				sx={{
					position: 'absolute',
					top: 0,
					right: 0,
					left: 0,
					bottom: 110,
				}}
				ref={mapContainer}
			/>
		</div>
	)
}

export default Map
