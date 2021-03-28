/** @jsxRuntime classic */
/**@jsx jsx */

import { useColorMode, Switch, jsx, Button } from 'theme-ui'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (props) => {
	const [colorMode, setColorMode] = useColorMode('default')

	return (
		<Button
			{...props}
			sx={{
				width: '95%',
			}}
		>
			{props.children}
		</Button>
	)
}
