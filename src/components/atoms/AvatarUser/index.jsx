/** @jsxRuntime classic */
/**@jsx jsx */

//components
import avatar from '../../../assets/img/png/avatar.png'

//UI
import { Avatar, jsx } from 'theme-ui'
import { IoPersonOutline } from 'react-icons/io5'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ image = avatar }, ...props) => {
	return (
		<Avatar
			src={avatar}
			sx={{
				width: 48,
				height: 48,
				borderRadius: '100%',
				backgroundColor: (theme) => theme.colors.highlight.menu,
			}}
			{...props}
		></Avatar>
	)
}
