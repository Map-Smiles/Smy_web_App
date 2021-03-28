import * as React from 'react'
import { Container, Heading, Image } from '@theme-ui/components'
import errorImg from '../../../assets/img/svg/warn.svg'
import { NavLink } from 'react-router-dom'

function NotFound() {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Heading as="h1">
				Hey, Não encontramos essa página...
				<NavLink to="/">Retornar a Home</NavLink>
			</Heading>
			<Image src={errorImg} />
		</Container>
	)
}

export default NotFound
