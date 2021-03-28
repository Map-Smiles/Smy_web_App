/** @jsxRuntime classic */
/**@jsx jsx */

//UI
import { AspectRatio, Text, jsx } from 'theme-ui'
import placeholder from '../../../assets/img/png/placeholder.png'

function ImageMilesMain({
	image = '',
	name = '',
	miles = '-',
	onClick = () => {},
}) {
	return (
		<AspectRatio
			ratio={4 / 3}
			onClick={onClick}
			sx={{
				borderRadius: '15px',
			}}
		>
			<div
				sx={{
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					padding: '.5em',
					backgroundColor: (theme) => theme.colors.backgroundGlass,
					color: (theme) => theme.colors.highlight.menu,
					top: 14,
					left: 0,
					height: '2.5em',
					width: '35%',
					zIndex: 30,
				}}
			>
				<Text>{miles} Milhas</Text>
			</div>
			<div
				sx={{
					position: 'absolute',
					backgroundColor: (theme) => theme.colors.highlight.menu,
					color: (theme) => theme.colors.gray.light,
					top: 0,
					left: 0,
					height: '.35em',
					width: '90%',
					borderRadius: '15px 15px 0 0',

					zIndex: 30,
				}}
			>
				<span
					sx={{
						position: 'absolute',
						backgroundColor: (theme) => theme.colors.gray.light,
						height: '.25em',
						top: 0,
						left: '35%',
						width: '90%',
						height: '.35em',
						borderRadius: '30px',

						zIndex: 30,
					}}
				/>
			</div>
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
					objectFit: 'cover',
					borderRadius: '15px',
				}}
			/>
		</AspectRatio>
	)
}

export default ImageMilesMain
