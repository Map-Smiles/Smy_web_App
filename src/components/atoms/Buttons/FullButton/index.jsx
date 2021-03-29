/** @jsxRuntime classic */
/**@jsx jsx */

import { useColorMode, Switch, jsx, Button } from 'theme-ui'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (props) => {
	const [colorMode, setColorMode] = useColorMode('default')

	const variantWhite = (
		<Button
			{...props}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: (theme) => theme.colors.gray.light,
				color: (theme) => theme.colors.highlight.menu,
				width: '95%',
				margin: '0 auto',
				padding: '.4em .2em',
				marginBottom: 2,
			}}
		>
			{props.children}
		</Button>
	)

	const outline = (
		<Button
			{...props}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '.4em .2em',
				borderStyle: 'solid',
				borderWidth: '1px',
				backgroundColor: (theme) => theme.colors.highlight.menu,
				borderColor: (theme) => theme.colors.gray.light,
				color: (theme) => theme.colors.gray.light,
				width: '95%',
				margin: '0 auto',
				marginBottom: 2,
			}}
		>
			{props.children}
		</Button>
	)

	switch (props.variant) {
		case 'white':
			return variantWhite
		case 'outline':
			return outline
		default:
			return (
				<Button
					{...props}
					sx={{
						width: '95%',
						margin: '0 auto',
					}}
				>
					{props.children}
				</Button>
			)
	}
}
