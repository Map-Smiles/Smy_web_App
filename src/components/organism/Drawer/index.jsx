/**@jsxRuntime classic */
/**@jsx jsx */
import * as React from 'react'

//Components
import {
	Container,
	jsx,
	Button,
	Flex,
	Heading,
	AspectImage,
	Text,
} from 'theme-ui'
import { keyframes } from '@emotion/react'
import { IoChevronUpOutline, IoCameraOutline } from 'react-icons/io5'

//imagem
import hotel from '../../../assets/img/png/hotel.png'
import CustomCarosel from '../../molecules/Carrousel'
import theme from '../../../styles/theme'

function Drawer() {
	const [open, setOpen] = React.useState(false)

	const show = keyframes`
        from {
            transform: scaleY(0);
        }
        to {
            transform: scaleY(100);
        }
        `
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				width: '100%',
				height: open ? '70%' : '40px',
				position: 'fixed',
				bottom: 75,
				left: 0,
				backgroundColor: (props) => props.colors.highlight.menu,
				transition: 'height 500ms ease',
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
				onClick={() => setOpen((preState) => !preState)}
			>
				<IoChevronUpOutline
					color={'#fff'}
					size={24}
					sx={{
						transform: open ? 'rotate(180deg)' : 'none',
						transition: 'transform 700ms ease-out',
					}}
				/>
				<p sx={{ color: (theme) => theme.colors.gray.light, margin: 0 }}>
					Descubra
				</p>
			</Button>
			<Flex
				sx={{
					width: '100%',
					height: '102%',
					backgroundColor: (theme) => theme.colors.background,
					zIndex: 12,
					flex: 'display',
					flexDirection: 'column',
					padding: '1em .75em',
					justifyContent: 'space-e',
				}}
			>
				<h4
					sx={{
						fontFamily: (theme) => theme.fonts.heading,
						color: (theme) => theme.colors.highlight.menu,
						margin: '0 0 .5em 0',
						letterSpacing: '1px',
					}}
				>
					Paulista - Instituto Pasteur
				</h4>
				<CustomCarosel>
					<AspectImage ratio={4 / 3} src={hotel} style={{ marginRight: 25 }} />
					<AspectImage ratio={4 / 3} src={hotel} />
				</CustomCarosel>
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
					<Button mr={2} variant="secondary" sx={{ width: '47.5%' }}>
						<IoCameraOutline />
					</Button>
					<Button mr={2} sx={{ width: '47.5%' }}>
						Coletar Milhas
					</Button>
				</Flex>
			</Flex>
		</Container>
	)
}

export default Drawer
