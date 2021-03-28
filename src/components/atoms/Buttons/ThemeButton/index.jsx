/** @jsxRuntime classic */
/**@jsx jsx */

import { useColorMode, Switch, jsx } from 'theme-ui'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (props) => {
	const [colorMode, setColorMode] = useColorMode('default')

	return (
		<Switch
			onClick={(e) => {
				setColorMode(colorMode === 'default' ? 'dark' : 'default')
			}}
			sx={{
				position: 'fixed',
				right: 15,
				top: 15,
				outline: 'none',
				zIndex: 999,
			}}
		/>
	)
}
