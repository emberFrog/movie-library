import React from 'react'
import formatDate from '../../formatDate'

import './movie-card.scss'

const MovieCard = ({ movie, onClick }) => {
	const API_IMG = 'https://image.tmdb.org/t/p/w500/'

	return (
		<article className='movieCard' onClick={onClick}>
			<img src={API_IMG + movie.poster_path} alt='Movie Poster' />
			<section className='info'>
				<p className='movieRate'>{movie.vote_average.toFixed(1)}</p>
				<section className='release'>
					<p className='title'>{movie.title}</p>
					<p className='releaseDate'>{formatDate(movie.release_date)}</p>
				</section>
			</section>
		</article>
	)
}

export default MovieCard
