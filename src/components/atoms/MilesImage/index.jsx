/** @jsxRuntime classic */
/**@jsx jsx */

//UI
import { AspectRatio, Text, jsx } from 'theme-ui'
import placeholder from '../../../assets/img/png/placeholder.png'

function MilesImage({ image, name = '', miles = '-' }) {
	return (
		<AspectRatio ratio={4 / 3} sx={{ margin: '0 .25em 0 0 ' }}>
			<div
				sx={{
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					padding: '.5em',
					backgroundColor: (theme) => theme.colors.highlight.menu,
					color: (theme) => theme.colors.gray.light,
					top: 14,
					left: 0,
					height: '2.5em',
					width: '35%',
					zIndex: 30,
				}}
			>
				<Text>{miles} Milhas</Text>
			</div>
			<img
				src={image ? image : placeholder}
				alt={`A ${name}`}
				sx={{
					position: 'absolute',
					left: 0,
					top: 0,
					right: 0,
					width: '100%',
					height: '100%',
					objectFit: 'cover',
				}}
			/>
		</AspectRatio>
	)
}

export default MilesImage
