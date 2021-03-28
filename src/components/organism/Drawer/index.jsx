/**@jsxRuntime classic */
/**@jsx jsx */
import * as React from 'react'

//Components
import { Container, jsx, Button, Flex, Text } from 'theme-ui'
import { IoChevronUpOutline, IoCameraOutline } from 'react-icons/io5'

//imagem
import hotel from '../../../assets/img/png/hotel.png'
import CustomCarosel from '../../molecules/Carrousel'
import FullButton from '../../atoms/Buttons/FullButton'
import MilesImage from '../../atoms/MilesImage'

function Drawer() {
	const [isOpen, setisOpen] = React.useState(false)

	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				width: '100%',
				maxWidth: '100%',
				height: '70%',
				position: 'fixed',
				bottom: 70,
				left: 0,
				backgroundColor: (props) => props.colors.highlight.menu,
				transform: isOpen ? 'translateY(0)' : 'translateY(90%)',
				transition: ' transform 500ms ease-in',
				zIndex: 9,
			}}
		>
			<Button
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: (theme) => theme.colors.highlight.menu,
					width: '100%',
					border: 'none',
					outline: 'none',
				}}
				onTouchStart={() => setisOpen((preState) => !preState)}
				onClick={() => setisOpen((preState) => !preState)}
			>
				<IoChevronUpOutline
					color={'#fff'}
					size={24}
					sx={{
						transform: isOpen ? 'rotate(180deg)' : 'none',
						transition: 'transform 700ms ease-out',
					}}
				/>
				<p
					sx={{
						color: (theme) => theme.colors.gray.light,
						margin: '0 0 0 5px',
					}}
				>
					Descubra
				</p>
			</Button>
			<Flex
				sx={{
					Maxwidth: '100%',
					height: '100%',
					backgroundColor: (theme) => theme.colors.background,
					zIndex: 12,
					flex: 'display',
					flexDirection: 'column',
					padding: '0 .75em',
					justifyContent: 'space-evenly',
				}}
			>
				<h4
					sx={{
						fontFamily: (theme) => theme.fonts.heading,
						color: (theme) => theme.colors.highlight.menu,
						margin: 0,
						letterSpacing: '1px',
					}}
				>
					Paulista - Instituto Pasteur
				</h4>
				<div sx={{ position: 'relative' }}>
					<CustomCarosel>
						<MilesImage image={hotel} name={'nome'} key={3} />
						<MilesImage image={hotel} name={'nome'} key={2} />
						<MilesImage image={hotel} name={'nome'} key={1} />
					</CustomCarosel>
				</div>
				<h2
					sx={{
						fontFamily: (theme) => theme.fonts.heading,
						color: (theme) => theme.colors.highlight.menu,
						margin: '.25em 0 .25em 0',
					}}
				>
					O que tem aqui?
				</h2>
				<Text
					sx={{
						letterSpacing: '.75px',
						lineHeight: '16px',
						fontFamily: (theme) => theme.fonts.heading,
						fontSize: (theme) => theme.fontSizes[1],
						color: (theme) => theme.colors.gray.dark,
						margin: '.25em 0 .25em 0',
					}}
				>
					Instituto Pasteur de São Paulo, instituição científica filantrópica,
					criada em 1903 por médicos paulistas, nos moldes do Instituto Pasteur
					de Paris.{' '}
				</Text>
				<Flex
					sx={{
						display: 'flex',
						width: '100%',
						justifyContent: 'space-between',
					}}
				>
					{!true ? (
						<FullButton>
							<IoCameraOutline size={26} />
							<Text ml={2}>Escanear QR Code</Text>
						</FullButton>
					) : (
						<FullButton>Coletar Milhas</FullButton>
					)}
				</Flex>
			</Flex>
		</Container>
	)
}

export default Drawer
