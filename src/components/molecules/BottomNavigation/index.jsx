/**@jsxRuntime classic */
/**@jsx jsx */
import * as React from 'react'
import {
	IoQrCodeOutline,
	IoBriefcaseOutline,
	IoMapOutline,
	IoWalletOutline,
} from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

import { jsx, Flex, Box } from 'theme-ui'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
function BottomNavigation(props) {
	const itemNav = (rota, label, icon) => {
		return (
			<NavLink
				to={rota}
				sx={{
					textDecoration: 'none',
					margin: 0,
					color: (theme) => theme.colors.gray.dark,
				}}
				activeClassName="active"
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
						fontSize: '12px',
					}}
				>
					{icon}

					{label.toUpperCase()}
				</Box>
			</NavLink>
		)
	}

	return (
		<>
			<Flex
				sx={{
					flexDirection: 'column',
					width: '100%',
					height: '75px',
					position: 'fixed',
					bottom: 0,
					left: 0,
					right: 0,
					backgroundColor: (props) => props.colors.background,
					justifyContent: 'space-evenly',
					padding: '1.5em 0',
					boxShadow: `0 -.25px 10px 1px #100`,
					zIndex: 20,
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
								size: 24,
								margin: '15px 0 0 0',
							}}
						/>
					)}
					{itemNav(
						'/pockets',
						'Pockets',
						<IoWalletOutline
							sx={{
								size: 24,
								margin: '15px 0 0 0',
							}}
						/>
					)}
					{itemNav(
						'/map',
						'MAPA',
						<IoMapOutline
							sx={{
								size: 24,
								margin: '15px 0 0 0',
							}}
						/>
					)}
					{itemNav(
						'/scan',
						'SCAN',
						<IoQrCodeOutline
							sx={{
								size: 24,
								margin: '15px 0 0 0',
							}}
						/>
					)}
				</Flex>
				<div
					sx={{
						position: 'absolute',
						bottom: 0.75,
						backgroundColor: (theme) => theme.colors.gray.darkest,
						width: '33%',
						height: '5px',
						zIndex: 99,
						borderRadius: '25px',
						transform: 'translateX(110%)',
					}}
				/>
			</Flex>
		</>
	)
}

export default BottomNavigation
