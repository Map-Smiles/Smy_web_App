/** @jsxRuntime classic */
/**@jsx jsx */
import React from 'react'
//UI
import { AspectRatio, Text, jsx } from 'theme-ui'
import placeholder from '../../../assets/img/png/placeholder.png'

function AchiveImage({
	image = '',
	name = '',
	miles = '-',
	onClick = () => {},
}) {
	return (
		<>
			<AspectRatio ratio={4 / 4}>
				<div
					sx={{
						position: 'absolute',
						display: 'flex',
						alignItems: 'center',
						padding: '.5em',
						backgroundColor: (theme) => theme.colors.backgroundGlass,
						color: (theme) => theme.colors.highlight.menu,
						top: 10,
						left: 0,
						height: '2.5em',
						width: '100%',
						zIndex: 30,
					}}
				>
					<div
						sx={{
							position: 'absolute',
							backgroundColor: (theme) => theme.colors.highlight.menu,
							color: (theme) => theme.colors.gray.light,
							top: 0,
							left: 0,
							height: '.35em',
							width: '100%',
							borderRadius: '15px 15px 0 0',

							zIndex: 30,
						}}
					></div>
					<Text
						sx={{
							fontSize: '12px',
							fontWeight: '400',
							textAlign: 'right',
							margin: 0,
							padding: 0,
						}}
					>
						{miles} milhas
					</Text>
				</div>
				<div
					sx={{
						position: 'absolute',
						// opacity: 0.6,
						filter: 'grayscale(100%)',
						width: '100%',
						height: '100%',
						// backgroundColor: (theme) => theme.colors.backgroundGlass,
						zIndex: 28,
						borderRadius: '15px',
					}}
					onClick={onClick}
				>
					<img
						src={image === '' ? image : placeholder}
						alt={`A ${name}`}
						sx={{
							position: 'absolute',
							left: 0,
							top: 0,
							right: 0,
							width: '100%',
							height: '100%',
							objectFit: 'contain',
						}}
					/>
				</div>
			</AspectRatio>
		</>
	)
}

export default AchiveImage
