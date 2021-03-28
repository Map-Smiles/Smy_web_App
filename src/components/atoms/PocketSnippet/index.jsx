/** @jsxRuntime classic */
/**@jsx jsx */

import { Box, Text, jsx, Flex } from 'theme-ui'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ milhas = 4000 }, ...props) => {
	return (
		<Box
			sx={{
				backgroundColor: (theme) => theme.colors.backgroundGlass,
				filter: 'blur(30%)',
				display: 'flex',
				flexDirection: 'column',
				width: '50%',
				textAlign: 'right',
				margin: 0,
				padding: '5px 15px 5px 5px',
			}}
			{...props}
		>
			<Text
				sx={{
					margin: '0 0',
					fontFamily: (theme) => theme.fonts.heading,
					fontSize: (theme) => theme.fontSizes[0],
				}}
			>
				MINHAS MILHAS
			</Text>
			<Text
				sx={{
					margin: '0 0',
					fontFamily: (theme) => theme.fonts.heading,
					color: (theme) => theme.colors.primary,
					fontSize: (theme) => theme.fontSizes[2],
				}}
			>
				{milhas}
			</Text>
		</Box>
	)
}
