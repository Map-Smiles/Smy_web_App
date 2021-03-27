/** @jsxRuntime classic */
/**@jsx jsx */

import { useColorMode, IconButton, jsx } from 'theme-ui'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (props) => {
	const [colorMode, setColorMode] = useColorMode('default')

	return (
		<IconButton
			onClick={(e) => {
				setColorMode(colorMode === 'default' ? 'dark' : 'default')
			}}
			aria-label="Toggle dark mode"
			sx={{
				position: 'fixed',
				right: 15,
				top: 15,
				outline: 'none',
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				sx={{
					fill: (theme) => theme.colors.primary,
				}}
			>
				<circle
					r={11}
					cx={12}
					cy={12}
					stroke="currentcolor"
					strokeWidth={2}
					sx={{
						fill: (theme) => theme.colors.gray,
					}}
				/>
			</svg>
		</IconButton>
	)
}
