import React from 'react'
import PropTypes from 'prop-types'

//Component
import MilesImageMain from '../../atoms/ImageMilesMain'

//UI
import { IoAddOutline } from 'react-icons/io5'
import { Flex, Grid, Text, Heading, Box } from '@theme-ui/components'
import placeholder from '../../../assets/img/png/placeholder.png'
import AchiveImage from '../../atoms/AchievedImage'

function Pockets() {
	return (
		<Grid
			columns={['1fr']}
			gap={2}
			sx={{
				height: '100%',
				Width: '100%',
				margin: 0,
				padding: '1em 15px 18vh 0',
			}}
		>
			<Flex
				sx={{
					flexDirection: 'column',
				}}
			>
				<Heading sx={{ color: (theme) => theme.colors.highlight.menu }}>
					40000{' '}
					<small style={{ fontSize: 12, fontWeight: 'lighter' }}>milhas</small>
				</Heading>
				<Text>Total de Milhas</Text>
			</Flex>
			<Flex
				sx={{
					flexDirection: 'column',
					justifyContent: 'flex-start',
				}}
			>
				{/* Abstrair component */}
				<Box
					sx={{
						height: '300px',
						borderRadius: '15px',
						marginBottom: '.75em',
						// boxShadow: `2px 2px 8px 1px #303030`,
					}}
				>
					<MilesImageMain name={`cidade`} miles={'40000'} image={placeholder} />
				</Box>
				<Box
					sx={{
						borderStyle: 'dashed',
						borderColor: (theme) => theme.colors.highlight.menu,
						'&:focus': {
							backgroundColor: '#30303030',
						},
						height: '150px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
						borderRadius: 15,
						marginBottom: '.75em',
						// boxShadow: `2px 2px 8px 1px #303030`,
					}}
				>
					<Flex
						sx={{
							alignItems: 'center',
							color: (theme) => theme.colors.highlight.menu,
							padding: '0.5em 0',
						}}
					>
						<IoAddOutline size={30} />
						Adicionar segundo Objetivo
					</Flex>
				</Box>
				{/* ******* */}
			</Flex>
			<Heading
				as="h6"
				sx={{
					fontFamily: (theme) => theme.fonts.heading,
					color: (theme) => theme.colors.highlight.text,
					margin: '.25em 0 .25em 0',
				}}
			>
				OBJETIVOS ALCANÇADOS
			</Heading>
			<Grid gap={4} columns={[2, '1fr', '1fr']}>
				<AchiveImage name={`cidade`} miles={'40000'} image={placeholder} />
				<AchiveImage name={`cidade`} miles={'40000'} image={placeholder} />
			</Grid>
		</Grid>
	)
}

export default Pockets
