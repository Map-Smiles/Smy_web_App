import React from 'react'
import { createPortal } from 'react-dom'
import usePortal from '../../../hooks/usePortal'

//UI
import { IoClose, IoCameraOutline } from 'react-icons/io5'
import { Container, Flex, Heading, Text } from '@theme-ui/components'
import takeof from '../../../assets/img/svg/takeof.svg'
import FullButton from '../../atoms/Buttons/FullButton'

/**
 *
 * @param {func} setShow função para fechar o modal
 * @param {boolean} isOpen indica se o modal já está aberto
 * @param {string} id id para a criação do modal atraves do portal
 * @param {number} milhas numero de milhas disponiveis para aquela ação
 * @returns
 */
const ModalOpcao = ({ isOpen, setShow, id, milhas = 0 }) => {
	const target = usePortal(id)
	if (!isOpen) return null
	const ModalDom = (
		<Container
			sx={{
				marginTop: '100px',
				width: '75vw',
				height: '65vh',
				backgroundColor: (theme) => theme.colors.highlight.primary,
				borderRadius: '15px',
				zIndex: 9999,
			}}
		>
			<Flex
				sx={{
					display: 'flex',
					padding: 2,
					justifyContent: 'flex-end',
				}}
			>
				<IoClose
					size={20}
					color="#FFF"
					onClick={() => setShow((prevState) => !prevState)}
				/>
			</Flex>
			<img
				src={takeof}
				alt="desenho do museu de são paulo"
				sx={{
					width: '75%',
					height: '30%',
				}}
			/>
			<Flex
				sx={{
					flexDirection: 'column',
					width: '90%',
					justifyContent: 'center',
					margin: '0 auto',
					textAlign: 'center',
				}}
			>
				<Heading sx={{ color: (theme) => theme.colors.gray.light }}>
					Você está {milhas} milhas mais próximo da sua viagem dos sonhos!
				</Heading>

				<Flex
					mt={2}
					sx={{
						flexDirection: 'column',
					}}
				>
					<FullButton
						variant="white"
						onClick={() => setShow((prevState) => !prevState)}
					>
						<Text ml={1} sx={{ fontSize: '14px', fontWeight: 'bold' }}>
							Continuar descobrindo
						</Text>
					</FullButton>
				</Flex>
			</Flex>
		</Container>
	)

	return createPortal(ModalDom, target)
}

export default ModalOpcao
