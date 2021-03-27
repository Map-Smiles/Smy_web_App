import * as React from 'react'

export default function useIsMobile() {
	const [isMobile, setIsMobile] = React.useState(true)
	const [ScreenSize, setScreenSize] = React.useState({
		widht: null,
		height: null,
	})

	React.useEffect(() => {
		const handleResize = () => {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
			if (ScreenSize.width > 875) {
				setIsMobile(false)
			} else {
				setIsMobile(true)
			}
		}
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return { isMobile }
}
