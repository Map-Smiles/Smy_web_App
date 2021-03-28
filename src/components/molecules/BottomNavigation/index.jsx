/**@jsxRuntime classic */
/**@jsx jsx */
import * as React from 'react'
import {
	IoQrCodeOutline,
	IoBriefcaseOutline,
	IoMapOutline,
	IoWallet,
} from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

import { jsx, Flex, Box } from 'theme-ui'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
function BottomNavigation(props) {
	const itemNav = (rota, label, icon) => {
		let active = false
		return (
			<NavLink
				to={rota}
				sx={{
					textDecoration: 'none',
					margin: 0,
					color: (theme) => theme.colors.gray.dark,
				}}
				activeStyle={{
					color: (theme) => theme.colors.highlight,
				}}
				isActive={(match, location) => {
					if (!match?.isExact) {
						return false
					}
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					{icon}

					{label.toUpperCase()}
				</Box>
			</NavLink>
		)
	}

	return (
		<Flex
			sx={{
				flexDirection: 'column',
				width: '100%',
				height: '75px',
				position: 'fixed',
				bottom: 0,
				left: 0,
				backgroundColor: (props) => props.colors.gray.lightest,
				justifyContent: 'space-evenly',
				padding: '1.5em 0',
			}}
		>
			<Flex
				{...props}
				sx={{
					display: 'flex',
					width: '100%',
					height: '100%',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					padding: '1em 0',
				}}
			>
				{itemNav(
					'/',
					'DESTINOS',
					<IoBriefcaseOutline
						sx={{
							size: 30,
							margin: '15px 0 0 0',
						}}
					/>
				)}
				{itemNav(
					'/pockets',
					'Pockets',
					<IoWallet
						sx={{
							size: 30,
							margin: '15px 0 0 0',
						}}
					/>
				)}
				{itemNav(
					'/map',
					'MAPA',
					<IoMapOutline
						sx={{
							size: 30,
							margin: '15px 0 0 0',
						}}
					/>
				)}
				{itemNav(
					'/scan',
					'SCAN',
					<IoQrCodeOutline
						sx={{
							size: 30,
							margin: '15px 0 0 0',
						}}
					/>
				)}
			</Flex>
		</Flex>
	)
}

export default BottomNavigation
