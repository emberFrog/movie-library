import React from 'react'
import FormatDate from '../FormatDate'

import './movie-card.scss'

const MovieCard = props => {
	const API_IMG = 'https://image.tmdb.org/t/p/w500/'

	return (
		<article className='movieCard'>
			<img src={API_IMG + props.poster_path} alt='Movie Poster' />
			<section className='info'>
				<p className='movieRate'>{props.vote_average.toFixed(1)}</p>
				<section className='release'>
					<p className='title'>{props.title}</p>
					<p className='releaseDate'>{FormatDate(props.release_date)}</p>
				</section>
			</section>
		</article>
	)
}

export default MovieCard
