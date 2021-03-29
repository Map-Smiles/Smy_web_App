import React from 'react'
import { createPortal } from 'react-dom'
import usePortal from '../../../hooks/usePortal'

//UI
import { IoClose, IoCameraOutline } from 'react-icons/io5'
import { Container, Flex, Heading, Text } from '@theme-ui/components'
import masp from '../../../assets/img/svg/masp.svg'
import FullButton from '../../atoms/Buttons/FullButton'
import ModalOpcao from '../ModalOpcao'

/**
 *
 * @param {func} setShow função para fechar o modal
 * @param {func} setShowOp controla o proximo modal
 * @param {boolean} isOpen indica se o modal já está aberto
 * @param {string} id id para a criação do modal atraves do portal
 * @param {number} milhas numero de milhas disponiveis para aquela ação
 * @returns
 */
const ModalIonfo = ({ isOpen, setShow, setShowOp, id, milhas = 0 }) => {
	const target = usePortal(id)
	if (!isOpen) return null
	const ModalDom = (
		<>
			<Container
				sx={{
					marginTop: '100px',
					width: '75vw',
					height: '65vh',
					backgroundColor: (theme) => theme.colors.highlight.menu,
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
					src={masp}
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
						Ajude outros viajantes!
					</Heading>
					<Text sx={{ color: (theme) => theme.colors.gray.light }}>
						Tire uma foto desse ponto e duplique as milhas que irá receber
					</Text>
					<Flex
						sx={{
							flexDirection: 'column',
						}}
					>
						<FullButton variant="white">
							<IoCameraOutline size={26} />
							<Text ml={1} sx={{ fontSize: '14px', fontWeight: 'bold' }}>
								Tirar foto e Ganhar 10 milhas
							</Text>
						</FullButton>
						<FullButton
							onClick={() => {
								setShow((prevState) => !prevState)
								setShowOp((prevState) => !prevState)
							}}
							variant="outline"
						>
							Coletar {milhas} Milhas
						</FullButton>
					</Flex>
				</Flex>
			</Container>
		</>
	)

	return createPortal(ModalDom, target)
}

export default ModalIonfo
