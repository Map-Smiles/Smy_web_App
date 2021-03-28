/** @jsxRuntime classic */
/**@jsx jsx */

//components
import PocketSnippet from '../../atoms/PocketSnippet'
import AvatarUser from '../../atoms/AvatarUser'

//UI
import { Box, Text, jsx, Flex } from 'theme-ui'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (props) => {
	return (
		<Flex
			sx={{
				position: 'absolute',
				top: 50,
				left: 0,
				display: 'flex',
				width: '90%',
				height: '70px',
				backgroundColor: 'transparent',
				justifyContent: 'space-between',
				margin: 0,
				padding: '15px 5px 0 0',
				zIndex: 25,
			}}
		>
			<PocketSnippet />
			<AvatarUser />
		</Flex>
	)
}
