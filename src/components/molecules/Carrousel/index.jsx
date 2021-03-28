import React from 'react'
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel'
// eslint-disable-next-line import/no-webpack-loader-syntax
import 'pure-react-carousel/dist/react-carousel.es.css'

export function CustomCarosel(props) {
	return (
		<CarouselProvider
			visibleSlides={1}
			totalSlides={props.children.length}
			step={3}
			naturalSlideWidth={500}
			naturalSlideHeight={250}
		>
			<Slider>
				{props.children.map((item, index) => (
					<Slide index={index}>{item}</Slide>
				))}
			</Slider>
		</CarouselProvider>
	)
}

export default CustomCarosel
