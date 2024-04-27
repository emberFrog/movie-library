import React from 'react'
import './detail.scss'

const Detail = props => {
	const API_IMG = 'https://image.tmdb.org/t/p/original/'

	return (
		<article className='overlay'>
			<article className='drawer'>
				<img src={API_IMG + props.backdrop_path}></img>
				<h2>faf</h2>
			</article>
		</article>
	)
}

export default Detail
